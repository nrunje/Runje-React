import { AddBoxOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Person from "./person.jpg";
import { AboutContent } from "./AboutContent";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from "@material-ui/core";
import AboutData from "./about.json";

function About(props) {
    const [date] = useState(new Date());
    const [page, setPage] = useState(0);

    console.log(AboutData.length);

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
                        {/* <AboutContent title="Nicholas J. Runje" /> */}
                        <AboutContent id={AboutData[page].id} title={AboutData[page].title}>
                            {AboutData[page].description}
                        </AboutContent>
                    </div>
                    </div>


                    <div className="about-content-lower">
                        <div className="about-content-buttons">
                            {page > 0 && <ArrowBackIcon onClick={() => setPage(page - 1)} />}
                            {page < AboutData.length  - 1 && <ArrowForwardIcon onClick={() => setPage(page + 1)} />}
                            {/* <ArrowForwardIcon onClick={() => setPage(page + 1)} /> */}
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                Designed in {date.getUTCFullYear()} with React.
                On page: {page}
            </footer>
        </div>
    );
}

export default About;