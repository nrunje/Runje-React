import React from "react";
import "./ProjectCard.css";

export function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-image-container">
                <img src={props.image} />
            </div>

            <div className="project-card-text-container">
                <div className="project-card-text">
                    <h2>Sorting Algos Visualizer</h2>
                    <p>Lorem ipusum dolor....</p>
                </div>
            </div>
        </div>
    );
}