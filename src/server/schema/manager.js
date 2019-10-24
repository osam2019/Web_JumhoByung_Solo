import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    managers: [Manager!]
    manager(id: ID!): Manager
  }

  extend type Mutation {
    setManagerOfUnit(
      unitId: ID!
    ): Manager!
    deleteManager(
	  id: ID!
	): Boolean!
  }

  type Manager {
    id: ID!
    name: String!
	militaryServiceNumber: String!
	unit: Unit!
  }

`;