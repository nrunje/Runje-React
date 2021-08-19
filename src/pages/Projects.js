import React from "react";
import "./Projects.css";
import { ProjectCard } from "../ProjectCard";
import ProjectsData from "../projects.json";
import CornerBox from "../components/CornerBox";

// Temporary images until JSON relative image paths can be fixed
import Froggit from "../froggit.png";
import HomePage from "../homepage.jpg";
import SortingPic from "../sorting.jpg";
import Header from "../components/Header";
// ====================================

// Temporary way to resolve images due to unknown error linking images in JSON file
const images = [SortingPic, HomePage, Froggit]

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-page">
                <Header />
                
                <CornerBox title="Personal CS Projects">
                    <ul>
                    {ProjectsData.map(project => (
                        <li>
                        <a href={project.link}>
                        <ProjectCard key={project.id} title={project.title} image={images[parseInt(project.id)]}>
                            {project.description}
                        </ProjectCard>
                        </a>
                        </li>
                    ))}
                    </ul>
                </CornerBox>
            </div>
        );
    }
}