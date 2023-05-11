import React from 'react'
import Table from 'react-bootstrap/Table';
import { BiEdit } from 'react-icons/bi'; 
import { TiUserDelete } from 'react-icons/ti'; 

function EmployerTable({employees,showEmployerInfo}) {
  return (
    <div className='employer-table'>
      
      <Table striped >
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Status</th>
              {/* <th style={{textAlign:"center"}}>Edit</th>
              <th style={{textAlign:"center"}}>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employer) => (
              <tr key={employer.id} onClick={()=>showEmployerInfo(employer)}>
                <td>{employer.firstName} {employer.lastName}</td>
                <td>{employer.email}</td>
                <td>{employer.phone}</td>
                <td>{employer.department}</td>
                <td>{employer.status}</td>
           
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  )
}

export default EmployerTable