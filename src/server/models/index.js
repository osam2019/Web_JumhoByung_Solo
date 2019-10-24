//https://www.robinwieruch.de/react-graphql-apollo-tutorial

import Sequelize from 'sequelize';
const dotenv = require('dotenv');
dotenv.config();

let sequelize;
if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres'
    });
} else {
    sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432
        }
    );
}

const models = {
    User: sequelize.import('./user'),
    Message: sequelize.import('./message'),
	Manager: sequelize.import('./manager'),
	Work: sequelize.import('./work'),
	Unit: sequelize.import('./unit'),
	Barrack: sequelize.import('./barrack'),
	Worktype: sequelize.import('./Worktype'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default models;