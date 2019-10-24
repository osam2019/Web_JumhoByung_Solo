import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    workTypes: [WorkType!]
    workTypesByUnit(unitId: ID!):[WorkType!]
    workType(id: ID!): WorkType
  }

  extend type Mutation {
    commanderCreateWorktype(
      	typename: String!
		worktime: String!
		isInTroopMorning: Boolean!
		outTroopExpMorning: String
		isInTroopEvening: Boolean!
		outTroopExpEvening: String
		affectMorningAttend: Boolean!
		absenceExpMorning: String
		affectEveningAttend: Boolean!
		absenceExpEvening: String
    ): WorkType!
	commanderSetWorktypeToUnit(
		typename: String!
		unitId: ID!
	):WorkType!
    commanderDeleteWorktype(
	  id: ID!
	): Boolean!
  }

  type WorkType {
	id: ID!
    typename: String!
	worktime: String!
	isInTroopMorning: Boolean!
    outTroopExpMorning: String
    isInTroopEvening: Boolean!
	outTroopExpEvening: String
	affectMorningAttend: Boolean!
    absenceExpMorning: String
	affectEveningAttend: Boolean!
	absenceExpEvening: String
  }
`;