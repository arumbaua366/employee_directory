import React from "react"
import "./style.css"


function filterEmployees(props) {
    return (
        <div>
        <div className="menu">
        <button onClick={() => props.sortEmployee()} className="remove">Employment Length</button>
        <button onClick={() => props.filterEmployee()} className="remove">4+ years</button>
        </div>
      </div>
    )
}

export default filterEmployees;