//https://www.robinwieruch.de/graphql-apollo-server-tutorial
//http://webframeworks.kr/tutorials/expressjs/expressjs_orm_one/
//https://hyunseob.github.io/2016/03/27/usage-of-sequelize-js/
//ps aux | grep -i node

/*
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public IS 'standard public schema';
*/
const dotenv = require('dotenv');
dotenv.config();

import http from 'http';

import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import Schema from './schema';
import resolvers from './resolver';
import models, { sequelize } from './models';

const app = express();
app.use(cors());

const getMe = async req => {
    console.log('header-xToken: ', req.headers['x-token']);
    const token = req.headers['x-token'];
    if (token) {
        try {
            return await jwt.verify(token, process.env.SECRET);
        } catch (e) {
            throw new AuthenticationError('Your session expired. Sign in again.');
        }
    }
};

const server = new ApolloServer({
	introspection: true,
  	playground: true,
    typeDefs: Schema,
    resolvers,
    context: async ({ req, connection }) => {
        if (connection) {
            console.log('connection occured!');
            return {
                models
            };
        }
        if (req) {
            console.log('request occured!');
            const me = await getMe(req);
            return {
                models,
                me,
                secret: process.env.SECRET
            };
        }
    },
    formatError: error => {
        // remove the internal sequelize error message
        // leave only the important validation error
        const message = error.message
            .replace('SequelizeValidationError: ', '')
            .replace('Validation error: ', '');
        return {
            ...error,
            message
        };
    }
});
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const eraseDatabaseOnSync = true;

const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;
const port = process.env.PORT || 80;

sequelize.sync({ force: isTest || isProduction }).then(async () => {
  if (isTest || isProduction) {
    createUsersWithMessages(new Date());
  }
  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
});


sequelize
    .sync({ force: true })
    .then(async () => {
        if (eraseDatabaseOnSync) {
            console.log('erase Database');
            createUsersWithMessages(new Date());
        }
    })
    .then(() => {
        httpServer.listen({ port: 80 }, () => {
            console.log('Apollo Server on http://localhost:80/graphql');
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// const dotenv = require('dotenv');
// dotenv.config();

// import http from 'http';

// import cors from 'cors';
// import express from 'express';
// import jwt from 'jsonwebtoken';
// import { ApolloServer, AuthenticationError } from 'apollo-server-express';
// import Schema from './schema';
// import resolvers from './resolver';
// import models, { sequelize } from './models';

// const app = express();
// app.use(cors());

// const getMe = async req => {
//     console.log('header-xToken: ', req.headers['x-token']);
//     const token = req.headers['x-token'];
//     if (token) {
//         try {
//             return await jwt.verify(token, process.env.SECRET);
//         } catch (e) {
//             throw new AuthenticationError('Your session expired. Sign in again.');
//         }
//     }
// };

// const server = new ApolloServer({
//     typeDefs: Schema,
//     resolvers,
//     context: async ({ req, connection }) => {
//         if (connection) {
//             console.log('connection occured!');
//             return {
//                 models
//             };
//         }
//         if (req) {
//             console.log('request occured!');
//             const me = await getMe(req);
//             return {
//                 models,
//                 me,
//                 secret: process.env.SECRET
//             };
//         }
//     },
//     formatError: error => {
//         // remove the internal sequelize error message
//         // leave only the important validation error
//         const message = error.message
//             .replace('SequelizeValidationError: ', '')
//             .replace('Validation error: ', '');
//         return {
//             ...error,
//             message
//         };
//     }
// });
// server.applyMiddleware({ app, path: '/graphql' });

// const httpServer = http.createServer(app);
// server.installSubscriptionHandlers(httpServer);

// const eraseDatabaseOnSync = true;

// sequelize
//     .sync({ force: true })
//     .then(async () => {
//         if (eraseDatabaseOnSync) {
//             console.log('erase Database');
//             createUsersWithMessages(new Date());
//         }
//     })
//     .then(() => {
//         httpServer.listen({ port: 80 }, () => {
//             console.log('Apollo Server on http://localhost:80/graphql');
//         });
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

const createUsersWithMessages = async date => {
    // await models.Unit
    // 	.create({
    // 	 	topCategory: '공군',
    // 		dep0: '교육사령부',
    // 		dep1: '제3훈련비행단',
    // 		dep2: '항공작전전대',
    // 		dep3: '항공작전과',
    // 		dep4: '-',
    // 		dep5: '-',
    // 		dep6: '-'
    // 	})

    // await models.Worktype
    // 	.create({
    // 	 	typename: '주간근무',
    // worktime: '0830-1730',
    // isInTroopMorning: true,
    // isInTroopEvening: true,
    // affectMorningAttend: false,
    // affectEveningAttend: false,
    // 	})

    await models.Worktype.create({
        typename: '야간근무',
        worktime: '1730-07300',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: true,
        absenceExpMorning: '야간근무',
        affectEveningAttend: true,
        absenceExpEvening: '야간근무'
    });

    await models.Worktype.create({
        typename: '주간근무',
        worktime: '0830-1730',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: false,
        absenceExpMorning: '',
        affectEveningAttend: false,
        absenceExpEvening: ''
    });
	
	await models.Worktype.create({
        typename: '비번',
        worktime: '-',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: false,
        absenceExpMorning: '',
        affectEveningAttend: false,
        absenceExpEvening: ''
    });
	
	// await models.Worktype.create({
	// typename: '급양근무',
	// worktime: '0430-0830',
	// isInTroopMorning: true,
	// outTroopExpMorning: '',
	// isInTroopEvening: true,
	// outTroopExpEvening: '',
	// affectMorningAttend: false,
	// absenceExpMorning: '',
	// affectEveningAttend: false,
	// absenceExpEvening: ''
	// });

    await models.Unit.create({
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '항공작전과',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    });

    await models.Worktype.findByPk(1).then(worktype => {
        models.Unit.findByPk(1).then(unit => worktype.addUnit(unit));
    });

    await models.Worktype.findByPk(2).then(worktype => {
        models.Unit.findByPk(1).then(unit => worktype.addUnit(unit));
    });
	
	await models.Worktype.findByPk(3).then(worktype => {
        models.Unit.findByPk(1).then(unit => worktype.addUnit(unit));
    });
	
	await models.Worktype.findByPk(4).then(worktype => {
        models.Unit.findByPk(1).then(unit => worktype.addUnit(unit));
    });

    // await models.Worktype
    // .findOrCreate(
    // {
    // where: {
    // typename: '야간근무',
    // worktime: '1730-07300',
    // isInTroopMorning: false,
    // outTroopExpMorning: '',
    // isInTroopEvening: false,
    // outTroopExpEvening: '',
    // affectMorningAttend: true,
    // absenceExpMorning: '야간근무',
    // affectEveningAttend: true,
    // absenceExpEvening: '야간근무',
    // units: [
    // {
    // 						topCategory: '공군',
    // 						dep0: '교육사령부',
    // 						dep1: '제3훈련비행단',
    // 						dep2: '항공작전전대',
    // 						dep3: '항공작전과',
    // 						dep4: '-',
    // 						dep5: '-',
    // 						dep6: '-',
    // }
    // ]
    // }
    // },
    // {
    // include: [models.Unit]
    // }
    // )

    // .then(workType => {
    //     models.Unit
    //         .findOrCreate({
    //             where: {
    //                 topCategory: '공군',
    //                 dep0: '교육사령부',
    //                 dep1: '제3훈련비행단',
    //                 dep2: '항공작전전대',
    //                 dep3: '항공작전과',
    //                 dep4: '-',
    //                 dep5: '-',
    //                 dep6: '-',
    //                 workId: 1
    //             }
    //         })
    //         .then(unit => {
    //             // console.log(unit.getWorktypes());
    //             return unit.addWorktype(workType);
    //         });
    // });

    await models.User
        .create(
            {
                username: 'ddavids',
                email: 'hello@robin.com',
                password: 'ddavids',
                militaryServiceNumber: '18-70011891',
                serviceStart: '2018-08-20',
                serviceEnd: '2018-06-30',
                roles: ['ADMIN', 'SOLDIER'],
                messages: [
                    {
                        text: 'Published the Road to learn React',
                        createdAt: date.setSeconds(date.getSeconds() + 1)
                    }
                ]
            },
            {
                include: [models.Message]
            }
        )
        .then(user => {
            return models.Unit
                .findOrCreate({
                    where: {
                        topCategory: '공군',
                        dep0: '교육사령부',
                        dep1: '제3훈련비행단',
                        dep2: '항공작전전대',
                        dep3: '항공작전과',
                        dep4: '-',
                        dep5: '-',
                        dep6: '-'
                    }
                })
                .spread((unit, created) => {
                    models.Manager
                        .findOrCreate({
                            where: {
                                name: '중사 박효정',
                                militaryServiceNumber: '10-20221'
                            }
                        })
                        .spread((manager, created) => {
                            unit.setManager(manager);
                        });
                    return user.setUnit(unit);
                });
        })
        .then(user => {
            return models.Barrack
                .findOrCreate({
                    where: {
                        topCategory: '공군',
                        dep0: '교육사령부',
                        dep1: '제3훈련비행단',
                        dep2: '-',
                        building: '토성 3생활관',
                        room: '9호실'
                    }
                })
                .spread((barrack, created) => {
                    return user.setBarrack(barrack);
                });
        });

    // await models.Worktype
    // .findOne({
    // where: { typename: '주간근무' }
    // })
    // .then(worktype => {
    // return models.Work
    // .create({
    // date: '2019-10-16'
    // })
    // .then(work => {
    // return work.setWorktype(worktype);
    // });
    // })
    // .then(work => {
    // return models.User
    // .findOne({
    // where: { militaryServiceNumber: '18-70011891' }
    // })
    // .then(user => {
    // return work.setUser(user);
    // });
    // });

    // await models.Worktype
    // .findOne({
    // where: { typename: '주간근무' }
    // })
    // .then(worktype => {
    // return models.Work
    // .create({
    // date: '2019-10-17'
    // })
    // .then(work => {
    // return work.setWorktype(worktype);
    // });
    // })
    // .then(work => {
    // return models.User
    // .findOne({
    // where: { militaryServiceNumber: '18-70011891' }
    // })
    // .then(user => {
    // return work.setUser(user);
    // });
    // });

    // await models.Worktype
    // .findOne({
    // where: { typename: '야간근무' }
    // })
    // .then(worktype => {
    // return models.Work
    // .create({
    // date: '2019-10-18'
    // })
    // .then(work => {
    // return work.setWorktype(worktype);
    // });
    // })
    // .then(work => {
    // return models.User
    // .findOne({
    // where: { militaryServiceNumber: '18-70011891' }
    // })
    // .then(user => {
    // return work.setUser(user);
    // });
    // });

    // await models.User
    //     .create(
    //         {
    //             username: 'ddavids',
    //             email: 'hello@david.com',
    //             password: 'ddavids',
    //             militaryServiceNumber: '18-70011892',
    //             serviceStart: '2018-08-20',
    //             serviceEnd: '2018-06-30',
    //             roles: ['SOLDIER'],
    //             messages: [
    //                 {
    //                     text: 'Happy to release ...',
    //                     createdAt: date.setSeconds(date.getSeconds() + 1)
    //                 },
    //                 {
    //                     text: 'Published a complete ...',
    //                     createdAt: date.setSeconds(date.getSeconds() + 1)
    //                 }
    //             ],
    //             works: [
    //                 {
    //                     date: '2019-10-16',
    //                     inTroop: true,
    //                     workTime: '0830-1730',
    //                     workType: '주간',
    //                     createdAt: date.setSeconds(date.getSeconds() + 1)
    //                 },
    //                 {
    //                     date: '2019-10-17',
    //                     inTroop: true,
    //                     workTime: '0830-1730',
    //                     workType: '주간',
    //                     createdAt: date.setSeconds(date.getSeconds() + 1)
    //                 }
    //             ],
    //             // attends: [
    //             //     {
    //             //         date: '2019-10-16',
    //             //         morning: true,
    //             //         evening: true,
    //             //         absenceExpMorning: '',
    //             //         absenceExpEvening: '',
    //             //         createdAt: date.setSeconds(date.getSeconds() + 1)
    //             //     },
    //             //     {
    //             //         date: '2019-10-17',
    //             //         morning: true,
    //             //         evening: false,
    //             //         absenceExpMorning: '',
    //             //         absenceExpEvening: '야간근무',
    //             //         createdAt: date.setSeconds(date.getSeconds() + 1)
    //             //     }
    //             // ]
    //         },
    //         {
    //             include: [models.Message, models.Unit, models.Work]
    //         }
    //     )
    //     .then(user => {
    //         return models.Unit
    //             .findOrCreate({
    //                 where: {
    //                     topCategory: '공군',
    //                     dep0: '교육사령부',
    //                     dep1: '제3훈련비행단',
    //                     dep2: '항공작전전대',
    //                     dep3: '항공작전과',
    //                     dep4: '-',
    //                     dep5: '-',
    //                     dep6: '-'
    //                 }
    //             })
    //             .spread((unit, created) => {
    //                 models.Manager
    //                     .findOrCreate({
    //                         where: {
    //                             name: '중사 박효정',
    // militaryServiceNumber: '10-20221'
    //                         }
    //                     })
    //                     .spread((manager, created) => {
    //                         unit.setManager(manager);
    //                     });
    //                 return user.setUnit(unit);
    //             });
    //     })
    //     .then(user => {
    //         return models.Barrack
    //             .findOrCreate({
    //                 where: {
    //                     topCategory: '공군',
    //                     dep0: '교육사령부',
    //                     dep1: '제3훈련비행단',
    //                     dep2: '-',
    //                     building: '토성 3생활관',
    //                     room: '8호실'
    //                 }
    //             })
    //             .spread((barrack, created) => {
    //                 return user.setBarrack(barrack);
    //             });
    //     });
};