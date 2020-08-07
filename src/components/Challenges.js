import React from 'react'
import Nav from './Nav'
import app from "./base"
import Monthly from './Monthly'
import text from '../challengeData.json'

function Challenges(props){
    const team = props.location.state.data[app.auth().currentUser.uid]
    const challenges = team.challenges
    console.log(challenges)

    return(
        <div className="main">
            <Nav data={props.location.state.data}/>
            <h2>Challenges</h2>
            <Monthly name={team.name} data={challenges.monthly} text={text.monthly} />
        </div>
    )

}

export default Challenges