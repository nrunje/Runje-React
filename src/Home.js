import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import ContentItem from "./ContentItem";
import Person from "./person.jpg";
import Computer from "./computer.jpg";
import FountainPen from "./fountain-pen.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onPage: "landing-page", 
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
                <ContentItem title="CS Projects" image={Computer}/>
                </Link>
                
                <Link style={{ textDecoration: 'none' }} to="/about">
                <ContentItem title="About Me" image={Person}/>
                </Link>

                <Link style={{ textDecoration: 'none' }} to="/writing">
                <ContentItem title="Essays and Writings" image={FountainPen} />
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