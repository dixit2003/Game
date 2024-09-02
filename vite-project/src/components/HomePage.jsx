import React from 'react'
import styled from 'styled-components'

const HomePage = ({toggle}) => {
  return (
    <Container>
      <ImageWrapper><img src='/images/dices.png' alt='Home Logo'/></ImageWrapper>
      <Content>
        <h1>Dice Game</h1>
        <PlayButton
            onClick={toggle}
        >
            Play Now
        </PlayButton>
      </Content>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 100vh;
    padding: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`
const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    img {
        max-width: 100%;
        height: auto;
    }
`
const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 6vw;
        font-weight: 700;
        margin-bottom: 20px;
        white-space: normal;
    }
`
const PlayButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    border-radius: 4px;
    min-width: 220px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid transparent;
    
    &:hover {
        background-color: #342e2e;
    }
`
