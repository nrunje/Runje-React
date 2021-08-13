import React from "react";
// import "./RoundedBox.css";

function RoundedBox(props) {
    return (
        <div className="rounded-box">
            <div className="content-title">
                {props.pagetitle}
            </div>

            <div className="content-boxes-container">
            {props.children}
            </div>
        </div>
    );
}

export default RoundedBox;