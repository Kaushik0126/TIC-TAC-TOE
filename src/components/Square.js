import React from "react";
import "../App.css";

const Sqaure = ({ val, chooseSquare }) => {
    return (
        <div className="square" onClick={chooseSquare}>{val}</div>
    );
}
 
export default Sqaure;