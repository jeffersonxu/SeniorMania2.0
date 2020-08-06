import React from "react"
import { Route, Switch } from "react-router-dom"
import app from "./base"
import Rules from "./Rules"
import Team from "./Team"
import Nav from "./Nav"

class Home extends React.Component {
    componentDidMount(){
        // let ref = app.database().ref('/')
        // ref.on('value', snapshot => {
        //     const state = snapshot.val()
        //     console.log(state)
        // })
    }

    render(){
        return (
            <div className="main">
                <Nav />
                <Rules />
            </div>
        )
    }
}

export default Home
