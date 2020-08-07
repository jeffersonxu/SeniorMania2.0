import React from 'react'

function Individual(props){
    const list = Object.keys(props.text).map((key) => {
        const required = props.text[key].required !== undefined ? <span className="required"> {props.text[key].required}</span>: null

        return(
            <div key={key} className="col-md-3 card">
                <div className="card-body">
                    <p>{ props.text[key].text }
                        <span className="red">{` (${props.text[key].points} points per member)`}</span>
                        {required}
                    </p>
                    <p>Number of people: <b>{props.data[key][0]}</b></p>
                </div>
            </div>
        )
    })

    return(
        <div className="main">
            <h3>Individual Challenges</h3>
            <div className="row">
                { list }
            </div>
        </div>
    )
}

export default Individual