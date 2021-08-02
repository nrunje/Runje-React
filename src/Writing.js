import React from "react";
import NavBar from "./NavBar";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";

export default function Writing() {
    return (
        <div className="writing-page">
            <NavBar />

            <RoundedBox pagetitle="Writings &#38; Other Essays">
                <ProjectCard />
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