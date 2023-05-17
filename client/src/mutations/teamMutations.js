
import { gql } from '@apollo/client';

const ADD_TEAM = gql`
  mutation addTeam($name: String!,$teamLeaderId: String!, $department: String!,$teamMembersId:[String]! , $companyId: String! ) {
        addTeam(name: $name, , teamLeaderId: $teamLeaderId, department: $department, teamMembersId: $teamMembersId,companyId:$companyId
      ) {
            id
            name
            department
            teamLeader{
                id
                firstName
                lastName
                phone
                email
            }
            teamMembers{
                id
                firstName
                lastName
                phone
                email
                status
            }
        }
  }
`;

export {ADD_TEAM };

