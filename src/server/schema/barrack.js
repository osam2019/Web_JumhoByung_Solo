import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    barracks: [Barrack!]
    barrack(id: ID!): Barrack
	barracksByUnit(
		topCategory: String 
		dep0: String
		dep1: String
		dep2: String
	): [Barrack]
  }

  extend type Mutation {
    userFindOrCreateBarrack(
    	topCategory: String!
		dep0: String!
		dep1: String!
    	dep2: String!
		building: String!
		room: String!
    ): Barrack!

    deleteBarrack(
	  id: ID!
	): Boolean!
  }

  type Barrack {
    id: ID!
    topCategory: String!
	dep0: String!
	dep1: String!
    dep2: String!
	building: String!
	room: String!
  }
`;