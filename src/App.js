import { useState } from "react";
import './App.css';
import NavBar from "./NavBar";
import React from "react";
import BlueOcean from "./blue-ocean-compressed.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onPage: "landing-page", 
      date: new Date()
    }
  }

  render() {
    if (this.state.onPage === "landing-page") {
      return (
        <div className="site-landing">
          <div className="site-title">
            <h1>Runje.org</h1>
          </div>

            <div className="site-landing-bottom">
              <div className="site-items-container">
                <h2>Items container</h2>
              </div>

              <footer>
                Designed in {this.state.date.getUTCFullYear()} with React.
              </footer>
            </div>
        </div>
      );
    }
    }
  }




