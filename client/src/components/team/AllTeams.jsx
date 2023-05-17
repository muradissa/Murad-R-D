import React from 'react'
import TeamCard from './TeamCard'

function AllTeams() {

    const teams = [
        {
            id:1,
            name: "Team Alpha",
            department: "Marketing",
            teamLeader: "Jane Doe",
            teamMembers: ["John Smith", "Emily Jones", "Tom Wilson"]
        },
        {
            id:2,
            name: "Team Bravo",
            department: "Sales",
            teamLeader: "Bob Johnson",
            teamMembers: ["Sara Lee", "Alex Rodriguez", "Kate Brown", "Mike Kim"]
        },
        {
            id:3,
            name: "Team Charlie",
            department: "Engineering",
            teamLeader: "David Lee",
            teamMembers: ["Linda Chen", "Eric Wang", "Nancy Zhang"]
        },
        {
            id:4,
            name: "Team Alpha",
            department: "Marketing",
            teamLeader: "Jane Doe",
            teamMembers: ["John Smith", "Emily Jones", "Tom Wilson"]
        },
        {
            id:5,
            name: "Team Bravo",
            department: "Sales",
            teamLeader: "Bob Johnson",
            teamMembers: ["Sara Lee", "Alex Rodriguez", "Kate Brown", "Mike Kim"]
        },
        {
            id:6,
            name: "Team Charlie",
            department: "Engineering",
            teamLeader: "David Lee",
            teamMembers: ["Linda Chen", "Eric Wang", "Nancy Zhang"]
        },
    ];

    return (
        <div className="row">
            <div className="team-cards">
                {/* <h1>Our Teams</h1> */}
                <div className="row">
                    {teams.map((team) => (
                        <TeamCard team={team}/>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default AllTeams;