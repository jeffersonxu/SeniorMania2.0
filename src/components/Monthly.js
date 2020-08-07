import React from 'react'

function Monthly(props){
    const Months = Object.keys(props.text).map((key) => {
        let active = null
        if(key === "January" && props.text[key].double.includes(props.name))
            active = {backgroundColor: "gold"}
        else if (props.data[key.toLowerCase()])
            active = {backgroundColor: "palegreen"}

        const required = props.text[key].required !== undefined ? <p className="required">{props.text[key].required}</p>: null

        return(
            <div style={ active } key={key} className="card col-md-4">
                <div className="card-body">
                    <h4 className="card-title">{key}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{props.text[key].subtext}</h6>
                    <p className="card-text">{props.text[key].text}</p>
                    { required }
                </div>
            </div>
        )
    })

    return(
        <div className="main">
            <h3>Monthly Challenges</h3>
            <p className="red">500 points each</p>
            <div className="row">
                { Months }
            </div>
        </div>
    )
}

export default Monthly