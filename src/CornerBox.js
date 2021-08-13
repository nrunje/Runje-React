import React from "react";
import "./CornerBox.css";

function CornerBox(props) {
    return (
        <div className="corner-box">
            <section className="content-title">
                {props.title}
            </section>
        </div>
    );
} 

export default CornerBox;