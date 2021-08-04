import React from "react";
import "./Projects.css";
import NavBar from "./NavBar";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";
import CompImage from "./computer.jpg";
import ProjectsData from "./projects.json";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: ProjectsData
        }
    }

    render() {
        return (
            <div className="projects-page">
                <NavBar />

                <RoundedBox pagetitle="Personal CS Projects">
                    <a href="https://sorting.runje.org">
                    <ProjectCard image={require("./computer.jpg")} title="Test Item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore 
                     magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                     Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </ProjectCard>
                    </a>

                    {this.state.projects.map(project => (
                        <a href={project.link}>
                            <ProjectCard key={project.id} title={project.title} image={project.image}>
                                {project.description}
                            </ProjectCard>
                        </a>
                    ))}
                </RoundedBox>
            </div>
        );
    }
}