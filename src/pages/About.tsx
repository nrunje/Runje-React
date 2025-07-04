import React, { useState } from "react";
import "./About.css";
import { AboutContent } from "../components/AboutContent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutData from "../about.json";
import NickRunje from "../images/nick-runje.jpg";
import Header from "../components/Header";

function About(props: any) {
    const [date] = useState(new Date());
    const [page, setPage] = useState(0);

    return (
        <div className="about-page-landing">
            <Header />

            <div className="about-content-total-container">
                <div className="about-content-container">

                    <div className="about-content-upper">
                        <div className="about-content-upper-left">
                            <img src={NickRunje} alt="Nicholas Runje" />
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
                            {page < AboutData.length - 1 && <ArrowForwardIcon onClick={() => setPage(page + 1)} />}
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