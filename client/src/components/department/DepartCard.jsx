import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './deparmensst.css'

const imgFunc =(name) =>{
  switch(name){
      case 'Devops':
          return 'devops.gif'
      case 'Finance':
          return 'finance.gif'
      case 'Human Resources':
          return 'hr.gif'
      case 'Legal':
          return 'legal.gif'
      case 'Marketing':
          return 'marketing.gif'
      case 'QA':
          return 'qa.gif'
      case 'UX/UI':
          return 'ux.gif'
      case 'Sales':
          return 'sales.gif'
      case 'Software Developer':
          return 'software.gif'
  }
}

function DepartCard({department}) {
  const numTeams = Math.floor(Math.random() * 10) + 1; // random number of teams between 1 and 10
  const numProjects = Math.floor(Math.random() * 20) + 1; // random number of projects between 1 and 20
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${imgFunc(department.name)}`} alt={`${department.name} image`}/>
      <Card.Body>
        <Card.Title>{department.name}</Card.Title>
        <Card.Text>
                {numTeams} Teams | {numProjects} Projects
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default DepartCard;