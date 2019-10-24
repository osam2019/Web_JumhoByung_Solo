import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    works: [Work!]
    work(id: ID!): Work
  }

  extend type Mutation {
    userCreateWork(
      date: String!
	  workTypeName: String!
    ): Work!
	userUpdateWork(
	  date: String!
	  workTypeName: String!
	): Work!
    deleteWork(
	  id: ID!
	): Boolean!
  }

  type Work {
    id: ID!
	date: String!
	user: User!
    workType: WorkType!
  }
`;