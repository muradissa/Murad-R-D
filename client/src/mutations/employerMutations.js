const ADD_EMPLOYER = gql`
  mutation addEmployer($firstName: String!,$lastName: String!, $email: String!, $phone: String!,$department: String!, $teamName: String!
    , $projectName: String!, $city: String!, $address: String!,$companyId: String!) {
        addEmployer(firstName: $firstName, , lastName: $lastName, email: $email, phone: $phone, department: $department, teamName: $teamName, projectName: $projectName, city: $city,address: $address,companyId:$companyId,
        isProjectManager: $isProjectManager, isTeamLeader: $isTeamLeader) {
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