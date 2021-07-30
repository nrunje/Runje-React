import React from "react";
import "./ContentItem.css";

function ContentItem(props) {
    return (
        <div className="content-item">
            <img src={props.image} />

            <div className="content-item-text">
                <h2>{props.content}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque tortor, suscipit sit amet lorem et, hendrerit iaculis est. In finibus commodo ipsum, at efficitur. </p>
            </div>
        </div>
    );
}

export default ContentItem;