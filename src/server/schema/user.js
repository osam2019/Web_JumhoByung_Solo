import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    signUp(
      username: String!
      email: String!
      password: String!
	  militaryServiceNumber: String!
	  serviceStart: String!
	  serviceEnd: String!
  	  roles: [String!]
    ): Token!
    signIn(
	  login: String!
	  password: String!
	): Token!
    deleteUser(
	  id: ID!
	): Boolean!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    email: String!
	militaryServiceNumber: String!
	unit: Unit!
    username: String!
	serviceStart: String!
	serviceEnd: String!
    roles: [Role!]
    messages: [Message!]
	works: [Work]
	barrack: Barrack
  }

  type Role {
	role: String!
  }
`;