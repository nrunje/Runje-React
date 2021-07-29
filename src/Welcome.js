import React from "react";
import "./Welcome.css";
import Typing from "react-typing-animation";

export default function Welcome() {
    return (
        <div className="welcome-sign">
            <Typing speed={100} className="welcome-typing">
                <Typing.Delay ms={500} />
                <span>Welcome to my website.</span>
                <Typing.Rest count={1} delay={500} />
            </Typing>
        </div>
    );
}