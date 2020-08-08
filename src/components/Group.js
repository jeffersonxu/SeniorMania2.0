import React from 'react'

function Group(props){
    const list = Object.keys(props.text).map((key) => {
        const required = props.text[key].required !== undefined ? <span className="required"> {props.text[key].required}</span>: null
        if(key === "townSigns"){
            return(
                <div key={key} className="custom-control custom-checkbox col-md-6">
                    <input
                        type="checkbox"
                        id={key}
                        className="custom-control-input"
                        checked={props.data[key][0] > 0}
                        disabled={true} />
                    <label className="custom-control-label" htmlFor={key}>{ props.text[key].text }
                        <span className="red"> ({props.data[key][1]} per sign, 5250 total)</span>
                        - Number of signs: <b>{props.data[key][0]}</b>
                        { required }
                    </label>
                </div>
            )
        }
        return(
            <div key={key} className="custom-control custom-checkbox col-md-6">
                <input
                    type="checkbox"
                    id={key}
                    className="custom-control-input"
                    checked={props.data[key][0]}
                    disabled={true} />
                <label className="custom-control-label" htmlFor={key}>{ props.text[key].text }
                    <span className="red"> ({props.data[key][1]} points)</span>
                    { required }
                </label>
            </div>
        )
    })

    return(
        <div className="main">
            <h3>Group Challenges</h3>
            <div className="group row">
                { list }
            </div>
        </div>
    )
}

export default Group