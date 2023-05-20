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
          {/* <SecondaryNavbar navItems={navItems}/> */}
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