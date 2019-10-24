import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isAuthenticated } from './authorization';

export default {
    Query: {
        barracks: combineResolvers(isAuthenticated, async (parent, args, { models }) => {
            return await models.Barrack.findAll();
        }),
        barrack: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Barrack.findByPk(id);
        }),
        barracksByUnit: combineResolvers(
            isAuthenticated,
            async (parent, { topCategory, dep0, dep1, dep2 }, { models }) => {
                console.log(topCategory, dep0, dep1, dep2);
                console.log(await models.Barrack.findAll());
                if (!topCategory && !dep0 && !dep1 && !dep2) {
                    return await models.Barrack.findAll();
                } else if (!!topCategory && !dep0 && !dep1 && !dep2) {
                    return await models.Barrack.findAll({
                        where: {
                            topCategory: topCategory
                        }
                    });
                } else if (!!topCategory && !!dep0 && !dep1 && !dep2) {
                    return await models.Barrack.findAll({
                        where: {
                            topCategory: topCategory,
                            dep0: dep0
                        }
                    });
                } else if (!!topCategory && !!dep0 && !!dep1 && !dep2) {
                    return await models.Barrack.findAll({
                        where: {
                            topCategory: topCategory,
                            dep0: dep0,
                            dep1: dep1
                        }
                    });
                } else if (!!topCategory && !!dep0 && !!dep1 && !!dep2) {
                    return await models.Barrack.findAll({
                        where: {
                            topCategory: topCategory,
                            dep0: dep0,
                            dep1: dep1,
                            dep2: dep2
                        }
                    });
                } else {
                    return new Error();
                }
            }
        )
    },
    Mutation: {
        userFindOrCreateBarrack: combineResolvers(
            isAuthenticated,
            async (parent, { topCategory, dep0, dep1, dep2, building, room }, { models, me }) => {
                return await models.Barrack
                    .findOrCreate({
                        where: {
                            topCategory: topCategory,
                            dep0: dep0,
                            dep1: dep1,
                            dep2: dep2,
                            building: building,
                            room: room
                        }
                    })
                    .spread((barrack, created) => {
                        return models.User
                            .update({ barrackId: barrack.id }, { where: {id: me.id }})
                            .then(() => {
                                console.log('User updated barrackId successfully!');
								return barrack
                            })
                            .error(function(err) {
                                console.log('User barrackId update failed !');
                                return new Error();
                            });
                    });
            }
        ),

        deleteBarrack: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
            return await models.Barrack.destroy({
                where: { id }
            });
        })
    }
};