import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import "./RoundedBox.css";

function RoundedBox(props) {
    return (
        <div className="rounded-box">
            {props.children}
        </div>
    );
}

export default RoundedBox;