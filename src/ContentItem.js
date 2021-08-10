import React from "react";
import "./ContentItem.css";

function ContentItem(props) {
    return (
        <div className="content-item">
            <img src={props.image} />

            <div className="content-item-text-container">
                <div className="content-item-text-content">
                <h1>{props.title}</h1>
                <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;