import React from "react"
import Nav from "./Nav"

function Team(){
    return(
        <div className="main">
            <Nav/>
            <h3 id="teamHeader">Team Information</h3>
            <p>Team Name: <span className="bold" id="team"></span></p>
            <p>Points: <span className="bold" id="point"></span></p>
            <p>Email: <span className="bold" id="teamEmail"></span></p>
            <p>Members: <span className="bold" id="members"></span></p>
            <p>Group Number: <span className="bold" id="groupNumber"></span></p>

            <button id="resetPass" type="button" className="btn btn-warning">Reset Password</button>

            <h3>How to Submit</h3>
            <ol>
                <li>Gather the quality pictures from the event completed and/or the video if was specified </li>
                <li>Don’t stage stranger challenges (it ruins the fun)</li>
                <li>Email or share the proof to <a href="mailto:seniormania19@gmail.com">seniormania19@gmail.com</a> with a description of what the event was </li>
                <li>Class Council will keep all of your pictures/videos in a Google folder and will add your points to a spreadsheet</li>
                <li>Points for teams will be updated on a week-to-week basis and can be seen in the "Team Info" section</li>
            </ol>

            <h3>Final Notes</h3>
            <ul>
                <li>If you find any bugs with the site (try refreshing first)</li>
                <li>If that doesn't work, either yell at Jeff what the problem is or email him at <a href="mailto:me@jeffersonxu.com">me@jeffersonxu.com</a> what the issue is</li>
            </ul>
            <h3>HAVE FUN, BE RECKLESS, EMBRACE THE JOURNEY</h3>
        </div>
    )
}

export default Team