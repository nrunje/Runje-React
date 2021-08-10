import React from "react";
import "./AboutContent.css"

export function AboutContent(props) {
    return (
        <div className="about-content">
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    );
}