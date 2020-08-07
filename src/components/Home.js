import React from "react"
import firebase from "./base"
import Rules from "./Rules"
import Nav from "./Nav"

class Home extends React.Component {
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
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