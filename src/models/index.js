// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Project, Profile, Client } = initSchema(schema);

export {
  Note,
  Project,
  Profile,
  Client
};