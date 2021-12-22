import React from "react";
import "./CornerBox.css";

function CornerBox(props: any) {
    return (
        <div className="corner-box">
            <section className="corner-box-title">
                {props.title}
            </section>

            <section className="corner-box-content-container">
                {props.children}
            </section>
        </div>
    );
}

export default CornerBox;