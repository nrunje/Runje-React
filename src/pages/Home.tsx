import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import ContentItem from "../components/ContentItem";
import Computer from "../images/computer.jpg";
import NickRunje from "../images/nick-runje.jpg";
import Header from "../components/Header";

type MyState = {
  date: Date
}

function getYear() {
  return new Date().getUTCFullYear;
}

export default class App extends React.Component {
  constructor(props: any) {
    super(props);

    // this.state = {
    //   date: new Date()
    // }
  }

  render() {
    return (
      <div className="site-landing">
        <Header />

        <div className="site-landing-bottom">
          <div className="site-items-container">
            <Link style={{ textDecoration: 'none' }} to="/projects">
              <ContentItem title="CS Projects" image={Computer} alt="Image of computer">
                A snippet of my various coding projects and assignments using different types of programming languages and CS technologies.
              </ContentItem>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/about">
              <ContentItem title="About Me" image={NickRunje} alt="Image of Nicholas Runje / Nick Runje">
                Here is a brief overview of my technical skills in CS (and elsewhere), academic credentials, and personal background/goals.
              </ContentItem>
            </Link>

            {/* ===== Below is writing section ====== */}
            {/* <Link style={{ textDecoration: 'none' }} to="/writing">
                <ContentItem title="Essays and Writings" image={FountainPen}>
                  Where I gather my thoughts on various happenings in the realm of politics, economics, and history. Unorthodox and unfiltered.
                </ContentItem>
                </Link> */}
          </div>

          <footer>
            Designed in {getYear} with React.
          </footer>
        </div>
      </div>
    );
  }
}