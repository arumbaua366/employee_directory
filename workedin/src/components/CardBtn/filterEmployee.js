import React from "react"
import "./style.css"



function filterEmployees(props) {
    return (
        <div>
        {/* <div className="buttons">
            <button onClick={() => props.filterEmployee()} className="remove">Only 50 cool +</button>
        </div>
        <div className="buttons">
            <button onClick={() => props.sortEmployee()} className="remove">Sort by coolness</button>
        </div>
        </div> */}

<div className="dropdown">
<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Dropdown button
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
<div className="buttons">
            <button onClick={() => props.filterEmployee()} className="remove">8+ years</button>
        </div>
        <div className="buttons">
            <button onClick={() => props.sortEmployee()} className="remove">Sort by employment length</button>
        </div>
</div>
</div>
</div>
    )
}

export default filterEmployees;