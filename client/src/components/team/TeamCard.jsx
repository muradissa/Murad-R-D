import React ,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './team.css'
import EditTeam from './EditTeam';
// function TeamCard({props}) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//       <Card.Body>
//         <Card.Title>Department - Team Name</Card.Title>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Team leader : Murad Eissa</ListGroup.Item>
//         <ListGroup.Item>Team members '(7)'</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">More Info</Card.Link>
//         <Card.Link href="#">Edit popup</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default TeamCard;


function TeamCard({team}) {
    // const {openModel,setOpenModel} = useState(false);
    const [show, setShow] = useState(false);
    return (
        <>
            <Card style={{ width: '18rem' ,margin:'1rem'}}>
                <div className="card-img-wrapper">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                </div>
                <Card.Body>
                <Card.Title className="team-title">{team.department} - {team.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item className="team-leader">Team leader: {team.teamLeader}</ListGroup.Item>
                <ListGroup.Item className="team-members">Team members {team.teamMembers.length}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Card.Link href="#" className="more-info-btn" >More Info</Card.Link>
                <Card.Link href="#" className="edit-popup-btn" onClick={() => setShow(true)}>Edit Popup</Card.Link>
                </Card.Body>
            
            </Card>
            <EditTeam team={team} show={show} setShow={setShow} />
        </>
    );
  }
export default TeamCard;
