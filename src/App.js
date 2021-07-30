import { useState } from "react";
import './App.css';
import NavBar from "./NavBar";
import React from "react";
import ContentItem from "./ContentItem";
import Person from "./person.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onPage: "landing-page", 
      date: new Date()
    }

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({onPage: "test-page"});
  // }

  render() {
    if (this.state.onPage === "landing-page") {
      return (
        <div className="site-landing">
          <div className="site-title">
            <h1>Runje.org</h1>
          </div>

            <div className="site-landing-bottom">
              <div className="site-items-container">
                {/* <h2>Items container</h2> */}
                <ContentItem content="CS Projects" image={Person}/>
                <ContentItem content="About Me" image={Person}/>
                {/* <ContentItem content="Essays and Writings" image={Person} /> */}
              </div>

              <footer>
                Designed in {this.state.date.getUTCFullYear()} with React.
              </footer>
            </div>
        </div>
      );
    } else {
      return <h1>Empty content</h1>;
    }
    }
  }




