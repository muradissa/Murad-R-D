import React ,{useState}from 'react'
import TeamCard from './TeamCard'
import SecondaryNavbar from '../navbar/SecondaryNavbar'
import AllTeams from './AllTeams'
import MyTeam from './MyTeam'
import AddTeam from './AddTeam'
import { useQuery } from '@apollo/client';
// import ClientRow from './ClientRow';
import Spinner from '../Spinner';
import { GET_Teams } from '../../queries/teamQueries';

const navItems=[{name:"All Teams",href:"#allTeams"},{name:"My Team",href:"#myTeam"},{name:"New Team+",href:"#"},]

function Teams() {
    const [selectedNav,setSelectedNav] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teams, setTeams] = useState([]);
    const { loading, error, data } = useQuery(GET_Teams,{
        variables:{companyId: "64608daac56032e3f109b61f"},
    });
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    
    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    // };
    const handleAddTeam = (newTeam) => {
        
        setTeams([...teams, newTeam]);
    };

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
            {!loading && !error && (
                <>
                    <SecondaryNavbar navItems={navItems} changeSelectedNavHandler={changeSelectedNavHandler} />
                    <div className="team-cards">
                            {(selectedNav==="All Teams" || selectedNav==="" )&& <AllTeams teams={data.companyTeamsInfo}/>}
                    </div>
                        
                        {(selectedNav==="My Team"  )&& <MyTeam/>}

                        {(selectedNav==="New Team+"  )&& <AddTeam/>}
                </>
            )}
        </div>
    )

}

export default Teams