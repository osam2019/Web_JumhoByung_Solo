import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isAuthenticated, isCommander } from './authorization';

export default {
    Query: {
        workTypes: combineResolvers(isAuthenticated, async (parent, args, { models }) => {
            return await models.Worktype.findAll();
        }),
        workType: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Worktype.findByPk(id);
        }),
		workTypesByUnit: combineResolvers(isAuthenticated, async (parent, { unitId }, { models }) => {
            return await models.Worktype.findAll({
				include: [{model: models.Unit, as:"units", through: {
      where: {
        unitId: unitId,
      },
    }}]});
        }),
    },
    Mutation: {
        commanderCreateWorktype: combineResolvers(
            isCommander,
            async (
                parent,
                { typename, worktime, isInTroopMorning, outTroopExpMorning, isInTroopEvening, outTroopExpEvening, affectMorningAttend, absenceExpMorning, affectEveningAttend, absenceExpEvening },
                { models }
            ) => {
                return await models.Worktype
                    .findOrCreate({
                        where: {
                            typename: typename,
                            worktime: worktime,
                            isInTroopMorning: isInTroopMorning,
                            outTroopExpMorning: outTroopExpMorning,
                            outTroopExpEvening: outTroopExpEvening,
                            affectMorningAttend: affectMorningAttend,
                            absenceExpMorning: absenceExpMorning,
                            affectEveningAttend: affectEveningAttend,
							absenceExpEvening: absenceExpEvening,
                        }
                    })
                    .spread((worktype, created) => {
						return worktype
                    });
            }
        ),
		
		commanderSetWorktypeToUnit: combineResolvers(
            isCommander,
            async (
                parent,
                { typename, UnitId },
                { models, me }
            ) => await models.Worktype
                .findOne({
                    where: {
                        typename: typename
                    }
				})
                .then(worktype => 
					models.Unit 
						.findOne({
							where: {
								id: unitId
							}
						})
						.then(unit => worktype.setUnit(unit))
				)
        ),

        commanderDeleteWorktype: combineResolvers(isCommander, async (parent, { id }, { models }) => {
            return await models.Unit.destroy({
                where: { id }
            });
        })
    }
};