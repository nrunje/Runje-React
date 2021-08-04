import React from "react";
import "./Projects.css";
import NavBar from "./NavBar";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";
import CompImage from "./computer.jpg";

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-page">
                <NavBar />

                <RoundedBox pagetitle="Personal CS Projects">
                    <a href="https://sorting.runje.org">
                    <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore 
                     magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                     Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </ProjectCard>
                    </a>

                    <a href="https://sorting.runje.org">
                    <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore 
                     magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                     Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </ProjectCard>
                    </a>
                </RoundedBox>
            </div>
        );
    }
}