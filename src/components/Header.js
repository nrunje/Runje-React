import { color } from "@material-ui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <section className="site-title" style={{cursor: "default"}}>
            <Link to="/" style={{ color: "white"}}>
            <h1 sytle="color: white;" >Runje.org</h1>
            </Link>
        </section>
    );
}