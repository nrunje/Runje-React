import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="error-page">
            <div className="error-page-content">
                <h1>Error 404: Page not found.</h1>
                <br />
                <h2>But don't leave! Click <Link to="/" style={{ color: "white"}}><em>here</em></Link> to go to the main page.</h2>
            </div>
        </div>
    );
}