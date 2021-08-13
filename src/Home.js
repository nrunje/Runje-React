import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import ContentItem from "./components/ContentItem";
import Person from "./person.jpg";
import Computer from "./computer.jpg";
import FountainPen from "./fountain-pen.jpg";
import NickRunje from "./nick-runje.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }

  render() {
      return (
        <div className="site-landing">
          <div className="site-title">
            <h1>Runje.org</h1>
          </div>

            <div className="site-landing-bottom">
              <div className="site-items-container">
                <Link style={{ textDecoration: 'none' }} to="/projects">
                <ContentItem title="CS Projects" image={Computer}>
                  A snippet of my various coding projects and assignments using different types of programming langagues and CS technologies.
                </ContentItem>
                </Link>
                
                <Link style={{ textDecoration: 'none' }} to="/about">
                <ContentItem title="About Me" image={NickRunje}>
                  Here is a brief overview of my technical skills in CS (and elsewhere), academic credentials, and personal background/goals.
                </ContentItem>
                </Link>

                <Link style={{ textDecoration: 'none' }} to="/writing">
                <ContentItem title="Essays and Writings" image={FountainPen}>
                  Where I gather my thoughts on various happenings in the realm of politics, economics, and history. Unorthodox and unfiltered.
                </ContentItem>
                </Link>
              </div>

              <footer>
                Designed in {this.state.date.getUTCFullYear()} with React.
              </footer>
            </div>
        </div>
      );
    }
  }