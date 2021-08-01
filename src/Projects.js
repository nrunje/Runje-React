import React from "react";
import "./Projects.css";
import NavBar from "./NavBar";
import RoundedBox from "./RoundedBox";

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-page">
                <NavBar />

                <RoundedBox>
                    <p>Test info</p>
                </RoundedBox>
            </div>
        );
    }
}