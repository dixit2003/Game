import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import PlayGame from './PlayGame'
import styled from 'styled-components'

const GamePage = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currNum, setNum] = useState(1)
  const [error, setError] = useState("")
  const [showRules, setRules] = useState()

  const generateDiceNum = () => {
    return Math.floor(Math.random() * 6) + 1
  }  

  const handleClick = () => {
      if (!selectedNumber) {
        setError("Please select a number")
        return
      }
      setError("")
      const newNum = generateDiceNum()
      setNum(newNum)

      if (selectedNumber === newNum) {
        setScore(score + newNum)
      }
      else {
        setScore(score - 2)
      }
      setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
}
  

  return (
    <MainContainer>
        <div className='top_section'>
            <Score 
                score={score}
                setScore={setScore}
            />
            <NumberSelector 
                error = {error}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}    
            />
        </div>
        <PlayGame 
            resetScore={resetScore} 
            currNum={currNum}
            handleClick={handleClick}
        />
  </MainContainer>
  )
}

export default GamePage

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`