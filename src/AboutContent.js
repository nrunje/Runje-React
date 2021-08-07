import React from "react";
import "./AboutContent.css"

export function AboutContent(props) {
    return (
        <div className="about-content">
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> 
        </div>
    );
}