import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RequestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly tasks?: (Task | null)[] | null;
  readonly requests?: (Request | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Task {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectTasksId?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class Request {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly response?: string | null;
  readonly status?: string | null;
  readonly request_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectRequestsId?: string | null;
  constructor(init: ModelInit<Request, RequestMetaData>);
  static copyOf(source: Request, mutator: (draft: MutableModel<Request, RequestMetaData>) => MutableModel<Request, RequestMetaData> | void): Request;
}

export declare class Profile {
  readonly id: string;
  readonly owner_id?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly companyName?: string | null;
  readonly bio?: string | null;
  readonly address?: string | null;
  readonly verified?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class Client {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

export declare class Company {
  readonly id: string;
  readonly companyName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}