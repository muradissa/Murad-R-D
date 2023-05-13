import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './employer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
//function AddEmployer({ onAdd }) {
//

const departmentOptions = ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'Software Development', 'Devops', 'QA'];

function AddEmployer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isTeamLeader, setIsTeamLeader] = useState(false);
  const [isProjectManager, setIsProjectManager] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployer = {
      id: Math.floor(Math.random() * 1000) + 1,
      firstName,
      lastName,
      phone,
      status,
      department,
      email,
      teamName,
      projectName,
      isTeamLeader,
      isProjectManager,
      birthday,
      city,
      address
    };
    // onAdd(newEmployer);
    setFirstName('');
    setLastName('');
    setPhone('');
    setStatus('');
    setDepartment('');
    setEmail('');
    setTeamName('');
    setProjectName('');
    setIsTeamLeader(false);
    setIsProjectManager(false);
    setBirthday('');
    setCity('');
    setAddress('');
  };

  return (
    <div className=''>
        <div className='justify-content-end' style={{display:"flex",marginRight:"1rem"}}>
            <Button onClick={() => setLgShow(true)} style={{ marginLeft:"inherit"}}>New Employer +</Button>
        </div>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            className='add-employer'
             >
            <Modal.Header closeButton className='modal-header'>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Add New Employer 
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                <Row style={{gap:"4rem" ,padding:"1rem"}}>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        
                        {/* <div className="form-group">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            {/* <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required /> */}
                            <Dropdown className='justify-content-end' style={{display:"flex"}}>
                                <Dropdown.Toggle variant="secondary" id="department-dropdown">
                                {department ? department : 'Select a department'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {departmentOptions.map((option) => (
                                        <Dropdown.Item key={option} onClick={() => setDepartment(option)}>{option}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="form-group">
                            <label htmlFor="teamName">Team Name</label>
                            <input type="text" className="form-control" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name</label>
                            <input type="text" className="form-control" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isTeamLeader">Is Team Leader?</label>
                            <input type="checkbox" id="isTeamLeader" checked={isTeamLeader} onChange={(e) => setIsTeamLeader(e.target.checked)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isProjectManager">Is Project Manager?</label>
                            <input type="checkbox" id="isProjectManager" checked={isProjectManager} onChange={(e) => setIsProjectManager(e.target.checked)} />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input type="text" className="form-control" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required />
                        </div> */}
                    </Col>
                </Row>
                   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" >
                        Add Employer
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
       
    </div>
);
}

export default AddEmployer;
