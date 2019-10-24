import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new ForbiddenError('Not authenticated as user.');

export const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    roles.includes('ADMIN')
      ? skip
      : new ForbiddenError('Not authorized as admin.'),
);

export const isSoldier = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    roles.includes('SOLDIER')
      ? skip
      : new ForbiddenError('Not authorized as soldier.'),
);

export const isOfficer = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    roles.includes('OFFICER')
      ? skip
      : new ForbiddenError('Not authorized as officer.'),
);

export const isOfficerOrCommander = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    (roles.includes('COMMANDER') || roles.includes('OFFICER'))
      ? skip
      : new ForbiddenError('Not authorized as officer or commander.'),
);

export const isCommander = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    roles.includes('COMMANDER')
      ? skip
      : new ForbiddenError('Not authorized as commander.'),
);

export const isNightWatcher = combineResolvers(
  isAuthenticated,
  (parent, args, { me: { roles } }) =>
    roles.includes('NIGHTWATCHER')
      ? skip
      : new ForbiddenError('Not authorized as night watcher.'),
);

export const isMessageOwner = async (
  parent,
  { id },
  { models, me },
) => {
  const message = await models.Message.findByPk(id, { raw: true });
  if (message.userId !== me.id) {
    throw new ForbiddenError('Not authenticated as owner.');
  }
  return skip;
};