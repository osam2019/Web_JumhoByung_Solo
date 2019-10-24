import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin } from './authorization';

const createToken = async (user, secret, expiresIn) => {
    const { id, email, username, militaryServiceNumber, roles } = user;
    return await jwt.sign({ id, email, username, roles }, secret, {
        expiresIn
    });
};

export default {
    Query: {
        users: async (parent, args, { models }) => {
            return await models.User.findAll();
        },
        user: async (parent, { id }, { models }) => {
            return await models.User.findByPk(id);
        },
        me: async (parent, args, { models, me }) => {
            if (!me) {
                return null;
            }
            return await models.User.findByPk(me.id);
        }
    },
    Mutation: {
        signUp: async (parent, { username, email, password, militaryServiceNumber, serviceStart, serviceEnd, roles}, { models, secret }) => {
            const user = await models.User.create({
                username,
                email,
                password,
				militaryServiceNumber,
				serviceStart,
				serviceEnd,
				roles
            });
			console.log(`${username}께서 가입하셨습니다.`)
            return { token: createToken(user, secret, '3000m') };
        },
        signIn: async (parent, { login, password }, { models, secret }) => {
            const user = await models.User.findByLogin(login);
            if (!user) {
                throw new UserInputError('No user found with this login credentials.');
            }
            const isValid = await user.validatePassword(password);
            if (!isValid) {
                throw new AuthenticationError('Invalid password.');
            }
            return { token: createToken(user, secret, '30m') };
        },
        deleteUser: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
            return await models.User.destroy({
                where: { id }
            });
        })
    },
    User: {
        messages: async (user, args, { models }) => {
            return await models.Message.findAll({
                where: {
                    userId: user.id
                }
            });
        },
		barrack: async (user, args, {models, me }) => {		
			if(!user.barrackId){
				return null
			}
			return await models.Barrack.findByPk(user.barrackId)
		},
		unit: async (user, args, {models}) => {
			return await models.Unit.findByPk(user.unitId)
		},
		works: async (user, args, {models}) => {
			return await models.Work.findAll({
				where: {
					userId: user.id
				}
			})
		}
    },
	Role: {
		role: async(role, args, {models}) => role,
	}
};