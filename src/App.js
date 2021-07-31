import React from "react";
import './App.css';
import  { IndexRoute, Switch, Route, Link, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Writing from "./Writing";


  export default function App() {
    return (
      <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/writing" exact component={Writing} />
      </BrowserRouter>
    );
  }


