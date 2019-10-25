import React from "react";

const Date = (props) => {
    return (
        <div className="date-container">
            <h1>{props.date}</h1>
        </div>
    );
};

export default Date;