import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isAuthenticated } from './authorization';

export default {
    Query: {
        units: combineResolvers(isAuthenticated, async (parent, args, { models }) => {
            return await models.Unit.findAll();
        }),
        unit: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Unit.findByPk(id);
        })
    },
    Mutation: {
        userFindOrCreateUnit: combineResolvers(
            isAuthenticated,
            async (
                parent,
                { topCategory, dep0, dep1, dep2, dep3, dep4, dep5, dep6 },
                { models, me }
            ) => {
                return await models.Unit
                    .findOrCreate({
                        where: {
                            topCategory: topCategory,
                            dep0: dep0,
                            dep1: dep1,
                            dep2: dep2,
                            dep3: dep3,
                            dep4: dep4,
                            dep5: dep5,
                            dep6: dep6
                        }
                    })
                    .spread((unit, created) => {
                        return models.User
                            .update({ unitId: unit.id }, { where: { id: me.id } })
                            .then(() => {
                                console.log('User updated unitId successfully!');
                                return unit;
                            })
                            .error(function(err) {
                                console.log('User unitId update failed !');
                                return new Error();
                            });
                    });
            }
        ),

        deleteUnit: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
            return await models.Unit.destroy({
                where: { id }
            });
        })
    },
	Unit: {
        workType: async (unit, args, { models }) => {
            return await models.Worktype.findByPk(unit.worktypeId);
        },
	}
};