import { AddBoxOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Person from "./person.jpg";
import { AboutContent } from "./AboutContent";

function About(props) {
    const [date] = useState(new Date());

    return (
        <div className="about-page-landing">
            <div className="site-title-about">
            <Link to="/">
                <h1>Runje.org</h1>
            </Link>
            </div>

            <div className="about-content-total-container">
                <div className="about-content-container">
                    <div className="about-content-upper">
                        <div className="about-content-upper-left">
                            <img src={Person} />
                        </div>

                    <div className="about-content-upper-right">
                        <AboutContent title="Nicholas J. Runje" />
                    </div>
                    </div>


                    <div className="about-content-lower">
                        Buttons here
                    </div>
                </div>
            </div>

            <footer>
                Designed in {date.getUTCFullYear()} with React.
            </footer>
        </div>
    );
}

export default About;