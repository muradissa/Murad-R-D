import React ,{useState}from 'react'
import TeamCard from './TeamCard'
import SecondaryNavbar from '../navbar/SecondaryNavbar'
import AllTeams from './AllTeams'
import MyTeam from './MyTeam'
import AddTeam from './AddTeam'
const navItems=[{name:"All Teams",href:"#allTeams"},{name:"My Team",href:"#myTeam"},{name:"New Team+",href:"#"},]

function Teams() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teams, setTeams] = useState([]);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleAddTeam = (newTeam) => {
        setTeams([...teams, newTeam]);
    };

    const [selectedNav,setSelectedNav] = useState("")
    const changeSelectedNavHandler = (nav) => {
        
        // if("New Team+"===nav){
        //     handleOpenModal()
        // }else{
        //    setSelectedNav(nav) 
        // }
        setSelectedNav(nav) 

    }

    return (
        <div >
           <SecondaryNavbar navItems={navItems} changeSelectedNavHandler={changeSelectedNavHandler} />
           <div className="team-cards">
                {(selectedNav==="All Teams" || selectedNav==="" )&& <AllTeams/>}
           </div>
            
            {(selectedNav==="My Team"  )&& <MyTeam/>}

            {(selectedNav==="New Team+"  )&& <AddTeam/>}
{/* 
            <AddTeam isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onAddTeam={handleAddTeam}/> */}
            {/* {(selectedNav==="New Team+"  ) &&
                <AddTeam isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onAddTeam={handleAddTeam}/>
            } */}
                    


            {/* <section id='myTeam'>
                <MyTeam/>
            </section> */}
            
        </div>
    )

}

export default Teams