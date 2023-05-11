import React from 'react'
import './employer.css';
import { VscCircleFilled } from "react-icons/vsc";
function EmployerInfo({employer}) {
  return (
    <>
        {/* <div>EmployerInfo</div> */}
        <div className='employer-Info' style={{background:"#f0f0f0"}}>
            <div className='employer-Info-header'>
                <img src={('/images/legal.gif')} alt='logo' />
                <div className='row'>
                    
                    <h4><VscCircleFilled/> Murad Issa</h4>
                    <h4>{employer.phone}</h4>
                </div>
                <h6>Department</h6>
            </div>
            <hr/>
            <div className='employer-Info-body1'>
                <h5>Email : test@test.com</h5>
                <h5>Phone : 1234567890</h5>
                <h5>Team : alfa team</h5>
                <h5>Project : alfa project</h5>
                <h5>Team Leader || Project Manager</h5>
            </div>
            <hr/>
            <div className='employer-Info-body2'>
                <h5>Birthday : 12/12/2000</h5>
                <h5>City : Tel aviv - Address :abc</h5>
                <h5>Team : alfa team</h5>
            </div>
            <div className='employer-Info-tail'>
                <button> Edit</button>
                <button> Delete</button>
            </div>
        </div>
    </>
  )
}

export default EmployerInfo