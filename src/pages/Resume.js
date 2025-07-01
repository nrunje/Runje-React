import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <section className="resume-page">
            <Header />

            <div className="resume-content-wrapper" style={resumeWrapper}>
                <h1 style={{ textAlign: "center", fontSize: "42px" }}>Click below for my resume:</h1>

                <Link to="/" style={{ padding: "10px 15px", marginTop: "25px" }} >
                    <button>Download</button>
                </Link>
            </div>
        </section>
    );
}

const resumeWrapper = {
    color: "white",
    width: "100%",
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}