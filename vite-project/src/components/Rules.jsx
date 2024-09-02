import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
      <RulesContainer>
        <h2>How to play the game</h2>
        <div className="points">
            <p>Select any number</p>
            <p>Click on the dice</p>
            <p>If selected is equal to points, then the selected number will be added to the score. Else -2 points.</p>
        </div>

      </RulesContainer>
    </div>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px 20px;
    max-width: 800px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    h2 {
        font-size: 24px;        
    }
    .points {
        margin-top: 24px;
    }

`
