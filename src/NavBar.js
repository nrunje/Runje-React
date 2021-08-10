import React from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-segment">
            <div className="navbar-container">
                <div className="navbar-content">
                    <IconButton>
                    <MenuIcon />
                    </IconButton>

                    <Link className="navbar-title-name" style={{ textDecoration: 'none', color: "black" }} to="/">
                    <h1>Runje</h1>
                    </Link>

                    <IconButton>
                    <BrightnessMediumIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default NavBar;