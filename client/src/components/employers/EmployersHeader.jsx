import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function EmployersHeader() {
  return (
    <div style={{ margin: '30px 0px' }}>
        <h2>
            Employers
        </h2>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ maxWidth: '250px' }}
                variant="outline-info"
            />
            <Button variant="outline-info">Search</Button>
        </Form>
    </div>
  )
}

export default EmployersHeader