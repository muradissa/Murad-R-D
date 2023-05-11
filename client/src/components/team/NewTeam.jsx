import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './team.css';

function NewTeam(props) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [teamLeader, setTeamLeader] = useState('');
  const [teamMembers, setTeamMembers] = useState('');

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
    <div className="new-team-form">
      <h2>Add New Team</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTeamName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter team name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formDepartment">
          <Form.Label>Department:</Form.Label>
          <Form.Control
            type="text"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            placeholder="Enter department name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formTeamLeader">
          <Form.Label>Team Leader:</Form.Label>
          <Form.Control
            type="text"
            value={teamLeader}
            onChange={e => setTeamLeader(e.target.value)}
            placeholder="Enter team leader name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formTeamMembers">
          <Form.Label>Team Members:</Form.Label>
          <Form.Control
            type="text"
            value={teamMembers}
            onChange={e => setTeamMembers(e.target.value)}
            placeholder="Enter team members, separated by commas"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Add Team</Button>
      </Form>
    </div>
  );
}

export default NewTeam;