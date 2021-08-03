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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </div>
            </div>
        </div>
    );
}