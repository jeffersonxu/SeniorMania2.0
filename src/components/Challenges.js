import React from 'react'
import Nav from './Nav'
import app from "./base"

function Challenges(props){
    const challenges = props.location.state.data[app.auth().currentUser.uid].challenges

    return(
        <div className="main">
            <Nav data={props.location.state.data}/>
            <h2>Challenges</h2>
        </div>
    )

}

export default Challenges