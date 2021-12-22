import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Error404() {
    return (
        <section className="error-page">
            <Header />
            
            <div className="error-page-text-container">
                <div className="error-page-text">
                    <h1>Error 404: Page not found.</h1>
                    <br />
                    <h2>But don't leave! Click <Link to="/" style={{ color: "white"}}><em>here</em></Link> to go to the main page.</h2>
                </div>
            </div>
        </section>
    );
}