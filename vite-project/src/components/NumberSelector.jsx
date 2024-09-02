import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  return (
    <NumSelectContainer>
      <p className='error-text'>{error}</p>
      <div className='flex'>
        {numArray.map((value, i) => (
          <Box 
          isSelected = {
            value === selectedNumber
          }
            key={i}
            onClick={() => setSelectedNumber(value)}>
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelectContainer>
    
  );
}

export default NumberSelector;

const NumSelectContainer = styled.div`
  .flex {
    display: flex;
    gap: 10px;
  }
  .p {
    font-size: 20px;
    font-weight: 700px;
  }
  .error-text {
    color: red;
  }
  display: flex;
  flex-direction: column;
  align-items: end;
`


  
const Box = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black": "white")};
  color: ${(props) => (!props.isSelected ? "black": "white")};
`;
