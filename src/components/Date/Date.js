import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    padding-top: 5%;
`;

const H1 = styled.h1`
    font-size: 2rem;
    text-shadow: 1px 1px 5px #FFF;
`;

const Date = (props) => {
    return (
        <Div className="date-container">
            <H1>{props.date}</H1>
        </Div>
    );
};

export default Date;