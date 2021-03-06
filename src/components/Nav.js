import React from 'react'
import { Link } from 'react-router-dom'
import app from "./base"

const Nav = (props) => {
    return(
        <div>
            <h1 className="header">Senior Mania</h1>
            <button id="btnLogout" onClick={() => app.auth().signOut()} className="btn btn-dark">Log Out</button>
            <nav style={{marginBottom: '2em'}} className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: "/challenges",
                            state: {
                                data: props.data
                            }
                        }}>Challenges</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: "/team",
                            state: {
                                data: props.data
                            }
                        }}>Team Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: "/leaderboard",
                            state: {
                                data: props.data
                            }
                        }}>Leaderboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav