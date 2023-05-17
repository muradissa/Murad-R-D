import React ,{useState} from 'react'
import EmployersHeader from './EmployersHeader';
import EmployerTable from './EmployerTable';
import EmployerInfo from './EmployerInfo';
import AddEmployer from './AddEmployer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
// import ClientRow from './ClientRow';
import Spinner from '../Spinner';
import { GET_EMPLOYERS } from '../../queries/employerQueries';
import SecondaryNavbar from '../navbar/SecondaryNavbar';


// const employees = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     phone: '555-1234',
//     status: 'Active',
//     department: 'Marketing',
//     email: 'johndoe@email.com',
//     teamName: 'Marketing Team A',
//     projectName: 'Marketing Campaign 1',
//     isTeamLeader: true,
//     isProjectManager: false,
//     birthday: '1990-01-01',
//     city: 'New York',
//     address: '123 Main St'
//   },
//   {
//     id: 2,
//     firstName: 'Jane',
//     lastName: 'Smith',
//     phone: '555-5678',
//     status: 'Active',
//     department: 'Sales',
//     email: 'janesmith@email.com',
//     teamName: 'Sales Team A',
//     projectName: 'Sales Campaign 1',
//     isTeamLeader: true,
//     isProjectManager: false,
//     birthday: '1985-05-12',
//     city: 'Los Angeles',
//     address: '456 Elm St'
//   },
//   {
//     id: 3,
//     firstName: 'Bob',
//     lastName: 'Johnson',
//     phone: '555-9876',
//     status: 'Inactive',
//     department: 'Finance',
//     email: 'bobjohnson@email.com',
//     teamName: 'Finance Team A',
//     projectName: 'Budget Analysis',
//     isTeamLeader: false,
//     isProjectManager: true,
//     birthday: '1982-09-22',
//     city: 'Chicago',
//     address: '789 Oak St'
//   },
//   {
//     id: 4,
//     firstName: 'Alice',
//     lastName: 'Lee',
//     phone: '555-5555',
//     status: 'Active',
//     department: 'Human Resources',
//     email: 'alicelee@email.com',
//     teamName: 'HR Team A',
//     projectName: 'Employee Training',
//     isTeamLeader: true,
//     isProjectManager: false,
//     birthday: '1992-12-31',
//     city: 'San Francisco',
//     address: '234 Maple St'
//   },
//   {
//     id: 5,
//     firstName: 'Mike',
//     lastName: 'Nguyen',
//     phone: '555-4321',
//     status: 'Active',
//     department: 'UX/UI',
//     email: 'mikenguyen@email.com',
//     teamName: 'Design Team A',
//     projectName: 'Product Redesign',
//     isTeamLeader: true,
//     isProjectManager: false,
//     birthday: '1988-06-08',
//     city: 'Seattle',
//     address: '567 Pine St'
//   },
//   {
//     id: 6,
//     firstName: 'Emily',
//     lastName: 'Chen',
//     phone: '555-2468',
//     status: 'Inactive',
//     department: 'Backend',
//     email: 'emilychen@email.com',
//     teamName: 'Backend Team A',
//     projectName: 'API Development',
//     isTeamLeader: false,
//     isProjectManager: true,
//     birthday: '1995-03-15',
//     city: 'Austin',
//     address: '890 Cedar St'
//   },
//   {
//     id: 7,
//     firstName: 'Chris',
//     lastName: 'Brown',
//     phone: '555-3698',
//     status: 'Active',
//     department: 'Frontend',
//     email: 'chrisbrown@email.com',
//     teamName: 'Frontend Team A',
//     projectName: 'Website Redesign',
//     isTeamLeader: false,
//     isProjectManager: false,
//     birthday: '1995-03-15',
//     city: 'Austin',
//     address: '890 Cedar St'
//   }
// ]
const navItems=[{name:"All Employers",href:"#"},{name:"asd",href:"#"},{name:"New Employer",href:"#"},]

function Employers() {
    /**
     * const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
     */
    const { loading, error, data } = useQuery(GET_EMPLOYERS,{
      variables:{companyId: "64608daac56032e3f109b61f"},
    });
    // const navItems=[{name:"All Employers",href:"#"},{name:"asd",href:"#"},{name:"New Employer",href:"#"}]

    const [employer, setEmployer] = useState({});
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
  
    
    const showEmployerInfo =(employerInfo) =>{
      setEmployer(employerInfo)
    }

    return (
      <>
        {!loading && !error && (
          <>
          <SecondaryNavbar navItems={navItems}/>
          <EmployersHeader/>
          {/* <AddEmployer/> */}
          <div className='row employees-body' style={{width:"100%"}}>
            <div className='employees-body-part1' style={{width:"70%"}}>
              <EmployerTable employees={data.companyEmployers} showEmployerInfo={showEmployerInfo}/>
            </div>
            <div className='employees-body-part2' style={{width:"30%"}}>
                <EmployerInfo employer={employer}/>
            </div>
          </div>
          </>
        )}
      </>
    );
}

export default Employers