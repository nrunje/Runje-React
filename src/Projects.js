import React from "react";
import "./Projects.css";
// import NavBar from "./NavBar";
import Nav from "./Nav";
import RoundedBox from "./RoundedBox";
import { ProjectCard } from "./ProjectCard";
import ProjectsData from "./projects.json";

// Temporary images until JSON relative image paths can be fixed
import CompImage from "./computer.jpg";
import FountainPen from "./fountain-pen.jpg";
import BlueOcean from "./blue-ocean-compressed.jpg";
// ====================================

// export default class Projects extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             projects: ProjectsData
//         }
//     }

//     render() {
//         return (
//             <div className="projects-page">
//                 <NavBar />

//                 <RoundedBox pagetitle="Personal CS Projects">
//                     <ul>
//                     {this.state.projects.map(project => (
//                         <a href={project.link}>
//                             <ProjectCard key={project.id} title={project.title} image={images[parseInt(project.id)]}>
//                                 {project.description}
//                             </ProjectCard>
//                         </a>
//                     ))}
//                     </ul>

//                 </RoundedBox>
//             </div>
//         );
//     }
// }

// // Temporary way to resolve images due to unknown error linking images in JSON file
const images = [CompImage, FountainPen, BlueOcean]

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-page">
                <Nav />
                
                <RoundedBox>

                </RoundedBox>
            </div>
        );
    }
}