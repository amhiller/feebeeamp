/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      name
      description
      tasks {
        items {
          id
          title
          description
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTasksId
          owner
        }
        nextToken
        startedAt
      }
      requests {
        items {
          id
          title
          description
          response
          status
          request_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectRequestsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      name
      description
      tasks {
        items {
          id
          title
          description
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTasksId
          owner
        }
        nextToken
        startedAt
      }
      requests {
        items {
          id
          title
          description
          response
          status
          request_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectRequestsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      name
      description
      tasks {
        items {
          id
          title
          description
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTasksId
          owner
        }
        nextToken
        startedAt
      }
      requests {
        items {
          id
          title
          description
          response
          status
          request_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectRequestsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      owner_id
      firstName
      lastName
      companyName
      bio
      verified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      owner_id
      firstName
      lastName
      companyName
      bio
      verified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      owner_id
      firstName
      lastName
      companyName
      bio
      verified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($owner: String) {
    onCreateClient(owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      address
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($owner: String) {
    onUpdateClient(owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      address
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($owner: String) {
    onDeleteClient(owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      address
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      companyName
      email
      phoneNumber
      address
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      companyName
      email
      phoneNumber
      address
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      companyName
      email
      phoneNumber
      address
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String) {
    onCreateTask(owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTasksId
      owner
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String) {
    onUpdateTask(owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTasksId
      owner
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String) {
    onDeleteTask(owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTasksId
      owner
    }
  }
`;
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($owner: String) {
    onCreateRequest(owner: $owner) {
      id
      title
      description
      response
      status
      request_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectRequestsId
      owner
    }
  }
`;
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($owner: String) {
    onUpdateRequest(owner: $owner) {
      id
      title
      description
      response
      status
      request_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectRequestsId
      owner
    }
  }
`;
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($owner: String) {
    onDeleteRequest(owner: $owner) {
      id
      title
      description
      response
      status
      request_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectRequestsId
      owner
    }
  }
`;
