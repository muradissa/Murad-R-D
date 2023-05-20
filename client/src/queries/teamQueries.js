import { gql } from '@apollo/client';

const GET_Teams = gql`
  query getCompanyTeams( $companyId:ID!) {
    companyTeamsInfo(companyId: $companyId){
      
        id
        name
        department
        companyId
        teamLeader{
            firstName
            lastName
            email
            phone
            status
        }
        teamMembers{
            firstName
            lastName
            email
            phone
            status
        }
        companyId
    }
  }
`;

export { GET_Teams };