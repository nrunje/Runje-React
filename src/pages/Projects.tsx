import React from "react";
import "./Projects.css";
import { ProjectCard } from "../components/ProjectCard";
import ProjectsData from "../projects.json";
import CornerBox from "../components/CornerBox";

// Temporary images until JSON relative image paths can be fixed
import Froggit from "../images/froggit.png";
import HomePage from "../images/homepage.jpg";
import SortingPic from "../images/sorting.jpg";
import Header from "../components/Header";
// ====================================

// Temporary way to resolve images due to unknown error linking images in JSON file
const images: string[] = [SortingPic, HomePage, Froggit]

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
                                    <ProjectCard key={project.id} title={project.title} image={images[parseInt(project.id)]} alt={project.alt}>
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