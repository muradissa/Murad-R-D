import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddEmployer from './AddEmployer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function EmployersHeader() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div style={{ margin: '30px 0px' ,width:"100%" }} >
        <h2>
            Employers
        </h2>
        <div className="header-subtitle-employer" style={{width:"70%"}}> 
          <Row>
            <Col md={4}>
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
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <div className='justify-content-end' style={{display:"flex",marginRight:"1rem"}}>
                  <Button onClick={() => setLgShow(true)} style={{ marginLeft:"inherit"}}>New Employer +</Button>
              </div>
              {lgShow && 
                <AddEmployer lgShow={lgShow} setLgShow={setLgShow}/> 
              }
              {/* <AddEmployer lgShow={lgShow} setLgShow={setLgShow}/> */}
            </Col>
          </Row>
            
          
          
        </div>
        
    </div>
  )
}

export default EmployersHeader