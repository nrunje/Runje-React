import { AddBoxOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function About(props) {
    return (
        <div>
            <p>ON about page</p>
            <Link to="/">
                <h1>Go back to home page</h1>
            </Link>
        </div>
    );
}

export default About;