import React from "react";
import "./ContentItem.css";

function ContentItem(props) {
    return (
        <div className="content-item">
            <img src={props.image} />

            <div className="content-item-text-container">
                <div className="content-item-text-content">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque tortor, suscipit sit amet lorem et, hendrerit iaculis est. In finibus commodo ipsum, at efficitur. </p>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;