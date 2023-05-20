import React from 'react'
import TeamCard from './TeamCard'

function AllTeams({teams}) {
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