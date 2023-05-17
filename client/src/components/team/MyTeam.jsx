// import React from 'react'

// function MyTeam() {
//   return (
//     <div>
//         <h2>Team Name</h2>
//         <h2>Team Leader | Phone | Mail</h2>
//         <h2>Team Members Table (Name , Phone ,Email , status , Button more info)</h2>
//         <h2>Projects Tables (Name , Project Manager ,Phone ,Email ,Button more info)</h2>
//     </div>
//   )
// }

// export default MyTeam;


import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcBusinessman, FcInvite,FcTabletAndroid} from "react-icons/fc";

// import './TeamInfo.css'; // Import your unique CSS file for styling

const MyTeam = () => {
  return (
    <div className="team-info-container">
      <h2 className="team-name">Team Name</h2>

      <div className="team-section">
        <h3>Team Leader Info</h3>
        <div className="team-leader-info" >
          <Row>
            <Col xs={4}>
              <p><FcBusinessman/> John Doe</p>
            </Col>
            <Col xs={4}>
              <p><FcTabletAndroid/> 123-456-7890</p>
            </Col>
            <Col xs={4}>
              <p><FcInvite/> john.doe@example.com</p>
            </Col>
          </Row>
          {/* <p>Name: John Doe</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: john.doe@example.com</p> */}
        </div>
      </div>

      <div className="team-section">
        <h3>Team Members</h3>
        <table className="team-members-info">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Member 1</td>
              <td>123-456-7890</td>
              <td>member1@example.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Member 2</td>
              <td>987-654-3210</td>
              <td>member2@example.com</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="team-section">
        <h3>Projects</h3>
        <table className="projects-info">
          <thead>
            <tr>
              <th>Name</th>
              <th>Project Manager</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project 1</td>
              <td>John Doe</td>
              <td>123-456-7890</td>
              <td>project1@example.com</td>
            </tr>
            <tr>
              <td>Project 2</td>
              <td>Jane Smith</td>
              <td>987-654-3210</td>
              <td>project2@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
