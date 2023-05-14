import { gql } from '@apollo/client';

const GET_EMPLOYERS = gql`
  query getCompanyEmployers( $companyId:ID!) {
    companyEmployers(companyId: $companyId){
      
        id
        firstName
        lastName
        email
        phone
        department
        # teamName
        # projectName 
        birthday
        status
        city
        address
        companyId
        isProjectManager
        isTeamLeader

    }
  }
`;

export { GET_EMPLOYERS };

/**
 * 
 * const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
 */