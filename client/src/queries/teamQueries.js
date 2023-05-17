import { gql } from '@apollo/client';

const GETTeams = gql`
  query getCompanyTeams( $companyId:ID!) {
    companyTeams(companyId: $companyId){
      
        id
        name
        teamleader{
            firstName
            lastName
            email
            phone
        }
        employers{
            firstName
            lastName
            email
            phone
        }
        companyId
    }
  }
`;

export { GETTeams };