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
                <ProjectCard image={CompImage} />
                {/* <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
            </RoundedBox>
        </div>
    );
}