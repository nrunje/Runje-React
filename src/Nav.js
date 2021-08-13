import React from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { IconButton } from "@material-ui/core";

function Nav() {
    return (
        <div className="nav-block">
            <div className="nav-content">
                <IconButton>
                <MenuIcon />
                </IconButton>

                <h1>Runje</h1>

                <IconButton>
                <BrightnessMediumIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Nav;