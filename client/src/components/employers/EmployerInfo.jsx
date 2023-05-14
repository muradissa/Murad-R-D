import React from 'react'
import './employer.css';
import { VscCircleFilled } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FcConferenceCall, FcInvite,FcBriefcase,FcTabletAndroid,FcHome,FcCalendar,FcFullTrash,FcSettings} from "react-icons/fc";

function EmployerInfo({employer}) {
    const circleColor = (status) =>{
        if(status === "Online"){
            return "green"
        }else if(status === "Busy"){
            return "orange"
        }else if(status === "Offline"){
            return "red"
        }else{
            return "blue"
        }
    }
    const getBirthDate = ()=> {
        if (employer.birthday !== undefined &&employer.birthday!== null){
            const date = new Date(parseInt(employer.birthday));
            const day = date.getDate();
            const month = date.getMonth() + 1; // month is zero-indexed, so add 1 to get the correct value
            const year = date.getFullYear();
            return (`${day}-${month}-${year}`);
        }else{
            return ("");
        }
    }
    
  return (
    <>
        {employer.firstName !== undefined && 
            <div className='employer-Info' style={{background:"#f0f0f0"}}>
                <div className='employer-Info-header'>
                    <img src={('/images/legal.gif')} alt='logo' />
                    <div className='row'>
                        <h4><VscCircleFilled style={{color:circleColor(employer.status)}}/>{employer.firstName} {employer.lastName}</h4>
                    </div>
                    <h6>{employer.department}</h6>
                </div>
                <hr/>
                <div className='employer-Info-body1'>
                    {employer.isTeamLeader &&
                        <h5 style={{textAlign:"center"}}> Team Leader</h5>
                    }
                    {employer.isProjectManager &&
                        <h5 style={{textAlign:"center"}}>Project Manager</h5>
                    }
                    <h5><FcTabletAndroid/>  {employer.phone}</h5>
                    <h5> <FcInvite/>  {employer.email}</h5>
                    <h5><FcConferenceCall/>  {employer.teamName}</h5>
                    <h5><FcBriefcase/>  {employer.projectName}</h5>
                    
                </div>
                <hr/>
                <div className='employer-Info-body2'>
                    <h5><FcCalendar/>  {getBirthDate()}</h5>
                    <h5><FcHome/>  {employer.city} - {employer.address}</h5>
                </div>
                <div className='employer-Info-tail'>
                    <Row className="justify-content-md-center" style={{gap:"2rem"}}>
                        <Col xs lg="3">
                            <Button variant="outline-success" style={{width: "150%"}}><FcSettings/> Edit </Button>
                        </Col>
                        <Col xs lg="3">
                            <Button variant="outline-danger" style={{width: "150%"}}><FcFullTrash/> Delete</Button>
                        </Col>
                        
                    </Row>
                </div>
            </div>
        }
    </>
  )
}

export default EmployerInfo