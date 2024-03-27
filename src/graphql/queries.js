/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      mailingAddress
      Affiliated {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mailingAddress
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      name
      email
      phone
      title
      mailingAddress
      interestAreas
      leadSource
      eventName
      organizationID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        title
        mailingAddress
        interestAreas
        leadSource
        eventName
        organizationID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const peopleByOrganizationID = /* GraphQL */ `
  query PeopleByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    peopleByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        phone
        title
        mailingAddress
        interestAreas
        leadSource
        eventName
        organizationID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
