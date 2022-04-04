// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Project } = initSchema(schema);

export {
  Note,
  Project
};