import React from "react";
import "./ContentItem.css";

function ContentItem(props: any) {
    return (
        <div className="content-item">
            <img src={props.image} alt={props.alt} />

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