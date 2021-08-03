import React from "react";
import NavBar from "./NavBar";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";
import CompImage from "./computer.jpg";

export default function Writing() {
    return (
        <div className="writing-page">
            <NavBar />

            <RoundedBox pagetitle="Writings &#38; Other Essays">
                <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </ProjectCard>
                <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </ProjectCard>
                <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </ProjectCard>
                <ProjectCard image={CompImage} title="Sorting Algos Visualizer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </ProjectCard>
            </RoundedBox>
        </div>
    );
}