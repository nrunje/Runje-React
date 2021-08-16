import React from "react";
import "./Projects.css";
import Nav from "../Nav";
import { ProjectCard } from "../ProjectCard";
import ProjectsData from "../projects.json";
import CornerBox from "../CornerBox";

// Temporary images until JSON relative image paths can be fixed
import Froggit from "../froggit.png";
import HomePage from "../homepage.jpg";
import SortingPic from "../sorting.jpg";
// ====================================

// Temporary way to resolve images due to unknown error linking images in JSON file
const images = [SortingPic, HomePage, Froggit]

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-page">
                <Nav />
                
                <CornerBox title="Personal CS Projects">
                    <ul>
                    <li>
                    {ProjectsData.map(project => (
                        <a href={project.link}>
                        <ProjectCard key={project.id} title={project.title} image={images[parseInt(project.id)]}>
                            {project.description}
                        </ProjectCard>
                        </a>
                    ))}
                    </li>
                    </ul>
                </CornerBox>
            </div>
        );
    }
}