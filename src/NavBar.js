import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';

export default function NavBar() {
    return (
        <div className="nav-container">
            <nav>
                <MenuIcon />
                <h1>Nicholas Runje</h1>
                <BrightnessMediumIcon />
            </nav>

        </div>
    );
}