import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { AboutContent } from "./AboutContent";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AboutData from "./about.json";
import NickRunje from "./nick-runje.jpg";

function About(props) {
    const [date] = useState(new Date());
    const [page, setPage] = useState(0);

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
                            <img src={NickRunje} />
                        </div>

                    <div className="about-content-upper-right">
                        <AboutContent id={AboutData[page].id} title={AboutData[page].title}>
                            {AboutData[page].description}
                        </AboutContent>
                    </div>
                    </div>


                    <div className="about-content-lower">
                        <div className="about-content-buttons">
                            {page > 0 && <ArrowBackIcon onClick={() => setPage(page - 1)} />}
                            {page < AboutData.length  - 1 && <ArrowForwardIcon onClick={() => setPage(page + 1)} />}
                        </div>
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