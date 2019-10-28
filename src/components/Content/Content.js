import React from "react";
import styled from 'styled-components';

const H2 = styled.h2`
    font-size: 3rem;
`;

const H3 = styled.h3`
    font-size: 1.5rem;
`;

const P = styled.p`
    padding: 15% 10% 0 10%;
`;

const Content = (props) => {
    return (
        <div className="content-container">
            <H2>{props.title}</H2>
            <H3>{props.copyright}</H3>
            <P>{props.explanation}</P>
        </div>
    );
};

export default Content;