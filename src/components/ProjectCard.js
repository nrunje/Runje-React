import React from "react";
import "./ProjectCard.css";

export function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-image-container">
                <img src={props.image} alt={props.alt} />
            </div>

            <div className="project-card-text-container">
                <div className="project-card-text">
                    <h2>{props.title}</h2>
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
}