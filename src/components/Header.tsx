import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <section className="site-title" style={{ cursor: "default" }}>
            <Link to="/" style={{ color: "white" }}>
                <h1 style={{ color: "white" }} >Runje.org</h1>
            </Link>
        </section>
    );
}