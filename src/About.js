import { AddBoxOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About(props) {
    const [date] = useState(new Date());

    return (
        <div className="about-page-landing">
            <div className="site-title-about">
            <Link to="/">
                <h1>Runje.org</h1>
            </Link>
            </div>

            <div className="about-content-container">
                Test
            </div>

            <footer>
                Designed in {date.getUTCFullYear()} with React.
            </footer>
        </div>
    );
}

export default About;