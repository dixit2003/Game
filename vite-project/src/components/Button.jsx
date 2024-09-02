import React from 'react'
import styled from 'styled-components';

const Button = ({ name, color, onClick }) => {
  return (
    <PlayButton color={color} onClick={onClick}> 
        {name}
    </PlayButton>
  )
}

export default Button

const PlayButton = styled.button`
    background-color: ${(props) => props.color};
    color: ${(props) => (props.color === 'black' ? 'white' : 'black')};
    padding: 10px 30px;
    border-radius: 4px;
    min-width: 120px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid black;
`
