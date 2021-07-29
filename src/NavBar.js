import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';

export default function NavBar() {
    return (
        <div className="nav-container">
            <nav>
                <IconButton>
                <MenuIcon />
                </IconButton>
                <h1>Runje.org</h1>
                <IconButton>
                <BrightnessMediumIcon />
                </IconButton>
            </nav>

        </div>
    );
}