// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Project, Task, Request, Profile, Client, Company } = initSchema(schema);

export {
  Note,
  Project,
  Task,
  Request,
  Profile,
  Client,
  Company
};