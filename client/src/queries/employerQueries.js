import { gql } from '@apollo/client';

const GET_EMPLOYERS = gql`
  query getEmployers {
    clients {
        id
        firstName
        lastName
        email
        phone
        department
        teamName
        projectName
        city
        address
        companyId
        isProjectManager
        isTeamLeader
    }
  }
`;

export { GET_EMPLOYERS };