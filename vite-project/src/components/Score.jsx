import styled from 'styled-components'

const Score = (props) => {
  return (
    <ScoreContainer>
        <h1>{props.score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default Score

const ScoreContainer = styled.div`
    max-width: 150px;
    text-align: center;
    h1 {
        font-size: 70px;
        line-height: 80px;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }

`
