import React from "react"
import Nav from "./Nav"

function Leaderboard(props){
    const data = props.location.state.data
    const sortable = []
    for(var user in data){
        const {points, members, name} = data[user]
        sortable.push({points: points, members: members.join(", "), name: name})
    }

    sortable.sort(function(a, b) {
        return b.points - a.points;
    })

    const board = sortable.map((team, index) =>
        <div key={team.name} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h4 className="mb-1">{`${index + 1}. ${team.name} : ${team.points}`}</h4>
            </div>
            <p className="mb-1">{team.members}</p>
        </div>
    )

    return(
        <div className="main">
            <Nav data={props.location.state.data}/>
            <h3>Leaderboard</h3>
            <p>Last updated: May 14th (we're in the endgame now)</p>
            <div className="board">
                { board }
            </div>
        </div>
    )
}

export default Leaderboard