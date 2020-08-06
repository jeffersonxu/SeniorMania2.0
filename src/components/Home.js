import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import firebase from "./base"
import Rules from "./Rules"
import Team from "./Team"
import Nav from "./Nav"

class Home extends React.Component {
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        const userId = firebase.auth().currentUser.uid
        firebase.database().ref('/').once('value', snapshot => {
            this.setState({data: snapshot.val().users})
        })
    }

    render(){
         return(
            <div className="main">
                <Nav data={this.state.data}/>
                <Rules />
            </div>
        )
    }
}


export default Home
