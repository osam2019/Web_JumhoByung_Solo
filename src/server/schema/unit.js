import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    units: [Unit!]
    unit(id: ID!): Unit
  }

  extend type Mutation {
    userFindOrCreateUnit(
      topCategory: String!
      dep0: String!
      dep1: String!
	  dep2: String!
	  dep3: String!
	  dep4: String!
  	  dep5: String!
	  dep6: String!
    ): Unit!
    deleteUnit(
	  id: ID!
	): Boolean!
  }

  type Unit {
    id: ID!
    topCategory: String!
	dep0: String!
	dep1: String!
    dep2: String!
	dep3: String!
	dep4: String!
    dep5: String!
    dep6: String!
	workType: WorkType!
  }

`;