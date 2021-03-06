import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Challenges from "./components/Challenges"
import Team from "./components/Team"
import Leaderboard from "./components/Leaderboard"
import Login from "./components/Login"

import { AuthProvider } from "./components/Auth"
import PrivateRoute from "./components/PrivateRoute"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faCode, faCamera } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faCode, faCamera)

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/challenges" component={Challenges}/>
          <PrivateRoute exact path="/team" component={Team}/>
          <PrivateRoute exact path="/leaderboard" component={Leaderboard}/>
          <Route exact path="/login" component={Login} />
        </div>
      </Router>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">
            Created with <FontAwesomeIcon icon="heart" /> from Jeff's labor and amazing coding abilities <FontAwesomeIcon icon="code"/>
            </p>
        </div>
      </footer>
    </AuthProvider>
  )
}

export default App;