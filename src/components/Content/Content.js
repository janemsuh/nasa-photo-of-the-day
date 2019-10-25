import React from "react";

const Content = (props) => {
    return (
        <div className="content-container">
            <h1>{props.title}</h1>
            <h2>{props.copyright}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};

export default Content;