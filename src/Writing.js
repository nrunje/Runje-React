import React from "react";
import Nav from "./Nav";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";
import CompImage from "./computer.jpg";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

export default function Writing() {
    return (
        <div className="writing-page">
            <Nav />
            
            <RoundedBox pagetitle="Writings &#38; Other Essays">
            </RoundedBox>

        </div>
    );
}