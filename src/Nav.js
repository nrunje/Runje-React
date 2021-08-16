import React from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-block">
            <div className="nav-content">
                {/* <IconButton>
                <MenuIcon />
                </IconButton> */}

                <Link to="/">
                <h1>Runje</h1>
                </Link>

                {/* <IconButton>
                <BrightnessMediumIcon />
                </IconButton> */}
            </div>
        </div>
    );
}

export default Nav;