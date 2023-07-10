import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 5px;
    text-align: center;
`;

const Footer = () => {
    const quotes = "It's not what happens to you, but how you react to it that matters.";
    return (
        <FooterStyles>
            <p>{quotes}</p>
        </FooterStyles>
    );
};

export default Footer;