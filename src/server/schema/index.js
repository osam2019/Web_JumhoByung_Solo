import { gql } from 'apollo-server-express';
import userSchema from './user';
import messageSchema from './message';
import barrackSchema from './barrack';
import unitSchema from './unit';
import managerSchema from './manager';
import workSchema from './work';
import workTypeSchema from './workType';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
export default [
	linkSchema, 
	userSchema, 
	messageSchema, 
	barrackSchema, 
	unitSchema, 
	managerSchema, 
	workSchema,
	workTypeSchema
];