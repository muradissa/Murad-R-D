
import { gql } from '@apollo/client';

const ADD_EMPLOYER = gql`
  mutation addEmployer($firstName: String!,$lastName: String!, $email: String!,$password:String! ,$phone: String!,$department: String!,$birthday:String!, $city: String!, $address: String!,$companyId: String!,$isProjectManager:Boolean!, $isTeamLeader:Boolean! ) {
        addEmployer(firstName: $firstName, , lastName: $lastName, email: $email, phone: $phone, department: $department,  city: $city,address: $address,companyId:$companyId,
        isProjectManager: $isProjectManager, isTeamLeader: $isTeamLeader, birthday: $birthday,password: $password) {
            id
            firstName
            lastName
            email
            password
            phone
            birthday
            department
            city
            address
            companyId
            isProjectManager
            isTeamLeader
        }
  }
`;

export { ADD_EMPLOYER };

