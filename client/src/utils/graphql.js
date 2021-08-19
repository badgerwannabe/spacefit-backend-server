import gql from "graphql-tag";

export const FETCH_TRAINERS_QUERY = gql`
  query {
    getTrainers {
      id
      name
      description
      email
      phoneNumber
      createdAt
    }
  }
`;
export const FETCH_TRAININGS_QUERY = gql`
  query {
    getTrainings {
      id
      name
      description
      email
      phoneNumber
      createdAt
    }
  }
`;
