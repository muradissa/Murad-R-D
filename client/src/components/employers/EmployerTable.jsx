import React from 'react'
import Table from 'react-bootstrap/Table';
import { BiEdit } from 'react-icons/bi'; 
import { TiUserDelete } from 'react-icons/ti'; 

function EmployerTable() {
  return (
    <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Status</th>
              <th style={{textAlign:"center"}}>Edit</th>
              <th style={{textAlign:"center"}}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{textAlign:"center"}}><BiEdit/></td>
                <td style={{textAlign:"center"}}><TiUserDelete style={{color:"#dd0000"}}/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{textAlign:"center"}}><BiEdit/></td>
                <td style={{textAlign:"center"}}><TiUserDelete style={{color:"#dd0000"}}/></td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{textAlign:"center"}}><BiEdit/></td>
                <td style={{textAlign:"center"}}><TiUserDelete style={{color:"#dd0000"}}/></td>
            </tr>
          </tbody>
        </Table>
  )
}

export default EmployerTable