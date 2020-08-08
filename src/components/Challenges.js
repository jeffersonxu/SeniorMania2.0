import React, { useEffect } from 'react'
import Nav from './Nav'
import app from "./base"
import Group from './Group'
import Individual from './Individual'
import Monthly from './Monthly'
import text from '../challengeData.json'

function Challenges(props){
    const team = props.location.state.data[app.auth().currentUser.uid]
    useEffect(() => {
        //Calculate Total Points

        //Special Conditions
        const janDouble = ["Best Selves™", "Tatusiowie", "Harverd Rejects", "Sen19rs in Predicaments"];
        const snowcoPoints = {
            "Sen19rs in Predicaments" : 400,
            "Osean's Eleven" : 800,
            "DAB ON 'EM" : 400,
            "nam" : 300,
            "Harverd Rejects" : 600
        }

        let total = 0
        for(const k in team.challenges.group){
            if(k === 'townSigns')
                total += team.challenges.group[k][0] * team.challenges.group[k][1]
            else if(k === 'snowco' && team.challenges.group[k][0])
                total += snowcoPoints[team.name]
            else if(team.challenges.group[k][0])
                total += team.challenges.group[k][1]
        }

        for(const k in team.challenges.individual)
            total += team.challenges.individual[k][0] * team.challenges.individual[k][1]

        for(const k in team.challenges.monthly){
            if(team.challenges.monthly[k]){
                if(janDouble.includes(team.name) && k === 'january')
                    total += 1000
                else
                    total += 500
            }
        }

        // Database rules set to only read so this does not work anymore
        // app.database().ref('users/' + app.auth().currentUser.uid).update({
        //     points: total
        // });
    }, [])

    return(
        <div className="main">
            <Nav data={props.location.state.data}/>
            <h2>Challenges</h2>
            <div className="challenges">
                <Group data={team.challenges.group} text={text.group} />
                <Individual data={team.challenges.individual} text={text.individual} />
                <Monthly name={team.name} data={team.challenges.monthly} text={text.monthly} />
            </div>
        </div>
    )
}

export default Challenges