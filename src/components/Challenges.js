import React from 'react'
import Nav from './Nav'
import app from "./base"
import Group from './Group'
import Individual from './Individual'
import Monthly from './Monthly'
import text from '../challengeData.json'

function Challenges(props){
    const team = props.location.state.data[app.auth().currentUser.uid]

    return(
        <div className="main">
            <Nav data={props.location.state.data}/>
            <h2>Challenges</h2>
            <Group data={team.challenges.group} text={text.group} />
            <Individual data={team.challenges.individual} text={text.individual} />
            <Monthly name={team.name} data={team.challenges.monthly} text={text.monthly} />
        </div>
    )
}

export default Challenges