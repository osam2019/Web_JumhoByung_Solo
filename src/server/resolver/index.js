import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import messageResolvers from './message';
import barrackResolvers from './barrack';
import unitResolvers from './unit';
import managerResolvers from './manager';
import workResolvers from './work';
import workTypeResolvers from './workType'


const customScalarResolver = {
  Date: GraphQLDateTime,
};
export default [
	customScalarResolver,
	userResolvers, 
	messageResolvers,
	barrackResolvers,
	unitResolvers,
	managerResolvers,
	workResolvers,
	workTypeResolvers
];