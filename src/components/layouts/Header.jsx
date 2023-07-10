import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
`;

const Header = (props) => {
    const { title } = props;
    return (
        <Nav>
            <h2>{title}</h2>
        </Nav>
    );
};

export default Header;
