import React from "react";
import './App.css';
import  { IndexRoute, Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Resume from "./pages/Resume";


  export default function App() {
    return (
      <Router>
        <Switch>
          <Route path="/projects" exact component={Projects} />

          <Route path="/about" exact component={About} />

          <Route path="/resume" exact>
            <Resume />
          </Route>

          <Route path="/" exact component={Home} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }


