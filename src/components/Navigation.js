import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigaion(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigaion;