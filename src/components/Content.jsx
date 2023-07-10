import React, { useState } from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.p`
  color: red;
`;

const Content = () => {
    const [enteredText, setEnteredText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setEnteredText(event.target.value);
    };

    const handleButtonClick = () => {
        if (enteredText.trim() === '') {
            setErrorMessage('Please enter some text.');
            setDisplayedText('');
        } else {
            setDisplayedText(enteredText);
            setErrorMessage('');
        }
    };

    return (
        <div>
            <textarea value={enteredText} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Display Text</button>
            <ErrorStyles>{errorMessage}</ErrorStyles>
            {displayedText && <p style={{ textAlign: 'center', color: "green", fontSize: "18px" }}>{displayedText}</p>}
        </div>
    );
};

export default Content;
