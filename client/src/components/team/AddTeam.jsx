import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import './team2.css';

const departmentOptions = ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'UX/UI' ,'Software Development', 'Devops', 'QA','Other' ];
const leftList = ['Manager', 'Engineer', 'Intern', 'Other'];

function AddTeam(props) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [teamLeader, setTeamLeader] = useState('');
  const [teamMembers, setTeamMembers] = useState('');

  // const [leftItems, setLeftItems] = useState(leftList);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const handleLeftClick = (item) => {
    const newSelected = [...selectedLeft];
    const selectedIndex = selectedLeft.indexOf(item);
    if (selectedIndex === -1) {
      newSelected.push(item);
    } else {
      newSelected.splice(selectedIndex, 1);
    }
    console.log(newSelected);
    setSelectedLeft(newSelected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = {
      name: name,
      department: department,
      teamLeader: teamLeader,
      teamMembers: teamMembers.split(',').map(member => member.trim())
    };
    props.onAddTeam(newTeam);
    setName('');
    setDepartment('');
    setTeamLeader('');
    setTeamMembers('');
  };

  return (
    <div className="new-team-form2">
      
      <h2>Add New Team</h2>
      <hr style={{width:"100%"}}></hr>
      {/* <hr style={{color:"red"}}/> */}
      <Form onSubmit={handleSubmit}>
        <Row style={{width:"100%"}}>
          <Col>

            {/* <Form.Group controlId="formTeamName" className='form-group-row'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter team name"
                required
              />
            </Form.Group> */}

            {/* <Form.Group controlId="formDepartment">
              <Form.Label>Department</Form.Label>
                <Dropdown className='justify-content-start' style={{display:"flex"}}>
                    <Dropdown.Toggle variant="secondary" id="department-dropdown">
                    {department ? department : 'Select a department'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {departmentOptions.map((option) => (
                            <Dropdown.Item key={option} onClick={() => setDepartment(option)}>{option}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
              </Form.Group> */}
            {/* <Form.Group controlId="formTeamLeader" className='form-control-flexx '> 
              <Form.Label>Team Leader</Form.Label>
                <Dropdown className='justify-content-start' style={{display:"flex"}}>
                    <Dropdown.Toggle variant="secondary" id="teamleader-dropdown">
                    {department ? department : ''}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {departmentOptions.map((option) => (
                            <Dropdown.Item key={option} >{option}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
              </Form.Group> */}
              <Form.Group controlId="formTeamName" className='form-group-row'>
                <Row className="align-items-center">
                  <Col xs={4}>
                        <Form.Label>Team Name</Form.Label>
                  </Col>
                  <Col xs={8}>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter team name"
                    required
                  />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="formDepartment" className='form-group-row'>
                <Row className="align-items-center">
                  <Col xs={4}>
                      <Form.Label>Department</Form.Label>
                  </Col>
                  <Col xs={8}>
                    <Dropdown className='justify-content-start' style={{display:"flex"}}>
                        <Dropdown.Toggle variant="secondary" id="department-dropdown2">
                        {department ? department : 'Select a department'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {departmentOptions.map((option) => (
                                <Dropdown.Item key={option} onClick={() => setDepartment(option)}>{option}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="formTeamLeader" className='form-group-row'>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Form.Label>Team Leader</Form.Label>
                  </Col>
                  <Col xs={8}>
                    <Dropdown className='justify-content-start' style={{ display: "flex" ,}}>
                      <Dropdown.Toggle variant="secondary" id="teamleader-dropdown">
                        {department ? department : 'Select a leader'}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {departmentOptions.map((option) => (
                          <Dropdown.Item key={option}>{option}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form.Group>
              <div className='team-members'>
                <h6>
                  Team members (6) :
                </h6>
                {/* <hr></hr> */}
                <h6>
                   murasd 1asdasd , asdasdas ,adasdas ,adasda ,asdasd 
                </h6>
              </div>
          </Col>
          <Col>
            <div className="list">
              <h5>Choose Team Members</h5>
              <ul>
                {departmentOptions.map((item) => (
                  <li
                    key={item}
                    className={selectedLeft.includes(item) ? 'selected' : ''}
                    onClick={() => handleLeftClick(item)}
                    style={{ backgroundColor:selectedLeft.includes(item) ? '' : '',padding:"4px 10px",margin:"5px"}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <hr/>
        
        <Button variant="primary" type="submit" style={{margin:"auto auto",display:"block"}}>Add Team</Button>
      </Form>
    </div>
  );
}

export default AddTeam;