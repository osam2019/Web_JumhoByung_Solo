import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isAuthenticated } from './authorization';

export default {
    Query: {
        works: combineResolvers(isAuthenticated, async (parent, args, { models }) => {
            return await models.Work.findAll();
        }),
        work: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Work.findByPk(id);
        })
    },
    Mutation: {
        userCreateWork: combineResolvers(
            isAuthenticated,
            async (
                parent,
                { date, workTypeName },
                { models, me }
            ) => {
			return await models.Worktype
				.findOne({
					where: { typename: workTypeName }
				})	
				.then(worktype => {
					return models.Work
						.findOne({
							where:{
								date: date
							}
						})
						.then((foundItem) => {
							if(!foundItem){
								//create
								return models.Work
               						.create({date:date})
									.then(work => {
										return work.setWorktype(worktype);
									})
									.then(work => {
										return work.setWorktype(worktype)
									})
							}else{
								//update
								return models.Work  
									.findOne({where: {date:date}})
									.then(work => {
										return work.setWorktype(worktype)
									})
							}
						})
				})
				.then(work => {
					return models.User
						.findOne({
							where: { id: me.id }
						})
						.then(user => {
							return work.setUser(user);
						});
				});
            }
        ),
		userUpdateWork: combineResolvers(
            isAuthenticated,
            async (
                parent,
                { date, workTypeName },
                { models, me }
            ) => {
			return await models.Worktype
				.findOne({
					where: { typename: workTypeName }
				})	
				.then(worktype => {
					return models.Work
						.findOne({
							where: { date: date }
						})
						.then(work => {
							return work.setWorktype(worktype);
						});
				})
            }
        ),
        deleteWork: combineResolvers(isAuthenticated, async (parent, { id }, { models }) => {
            return await models.Work.destroy({
                where: { id }
            });
        })
    },
	Work: {
        user: async (work, args, { models }) => {
			return await models.User.findByPk(work.userId);
        },
		workType: async (work, args, {models }) => {		
			return await models.Worktype.findByPk(work.worktypeId)
		}
    },
};