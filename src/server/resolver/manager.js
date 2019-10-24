import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isOfficerOrCommander, isAuthenticated } from './authorization';

export default {
    Query: {
        managers: combineResolvers(isAuthenticated, async (parent, args, { models }) => {
            return await models.Manager.findAll();
        }),
        manager: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Manager.findByPk(id);
        })
    },
    Mutation: {
        setManagerOfUnit: combineResolvers(
            isAuthenticated,
            async (parent, { unitId }, { models, me }) =>
                await models.User.findByPk(me.id).then(user =>
                    models.Manager
                        .findOrCreate({
                            where: {
                                name: user.username,
                                militaryServiceNumber: user.militaryServiceNumber
                            }
                        })
                        .spread((manager, created) => {
                            return models.Manager
                                .update({ unitId: unitId }, { where: { id: manager.id } })
                                .then(() => {
                                    console.log('User updated unitId successfully!');
                                    return manager;
                                })
                                .error(function(err) {
                                    console.log('User unitId update failed !');
                                    return new Error();
                                });
                        })
                )
        ),

        deleteManager: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
            return await models.Manager.destroy({
                where: { id }
            });
        })
    },
    Manager: {
        unit: combineResolvers(
            isAuthenticated,
            async (user, args, { models }) =>
                await models.Manager
                    .findOne({
                        where: {
                            name: user.id,
                            militaryServiceNumber: user.militaryServiceNumber
                        }
                    })
                    .then(manager =>
                        models.Unit.findOne({
                            where: {
                                id: manager.unitId
                            }
                        })
                    )
        )
    }
};