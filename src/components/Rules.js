import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rules = () => {
    return(
        <div id="main">
            <h3>Rules</h3>
            <p>Team must have at least <span className="red">5 members</span> but <span className="red">no more than 12 </span><span className="video">(no exceptions)</span></p>

            <h3>Team Challenges</h3>
            <p>Everyone must be present to get points under these guidelines</p>
            <ul>
                <li>A team of <span className="red">5-9 members</span>: <b>ONE</b> member can miss the challenge</li>
                <li>A team of <span className="red">10-12 members</span>: <b>TWO</b> members can miss the challenge</li>
                <li>Each team challenge can only be done once </li>
            </ul>

            <h3>Individual Challenges</h3>
            <p>Any member can complete for points</p>
            <ul>
                <li>Ex: If 3 people do a 100 point event, that is 300 points for the team</li>
                <li>You as an individual can only do each individual event <b>ONCE</b></li>
            </ul>

            <h3>PICTURE <FontAwesomeIcon icon="camera" /> OR IT DIDN'T HAPPEN</h3>
            <p>All team members must be visible in photo/video unless otherwise noted (i.e. video specified)</p>
        </div>
    )
}

export default Rules