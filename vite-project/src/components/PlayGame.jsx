import React from 'react'
import styled from 'styled-components';
import Button from './Button' 
import Rules from './Rules'

const PlayGame = ({ resetScore, currNum, handleClick }) => {
    return (
    <ThrowDice>
        <div className='dice-div'> 
            <img 
                className='dice-img' 
                src={`/images/dice/dice_${currNum}.png`}
                onClick={handleClick}
                alt='Dice Image'
            />
            <p className='inst'>Click on Dice to Roll</p>
            <div className="btns">
                <Button 
                    name='Reset Score'
                    color='white'
                    onClick={resetScore}
                />
                <Button 
                    name='Show Rules'
                    color='black'

                />
            </div>
            <Rules />
        </div>
    </ThrowDice>
  )
}

export default PlayGame

const ThrowDice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;

    .dice-div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 24px;
    }    
    .inst {
        font-size: 22px;
        font-weight: 500;
        line-height: 36px;
        max-width: 229px;
        text-align: center;
    }
    .dice-img {
        cursor: pointer;
    }
    .btns {
        display: flex;
        gap: 12px;
        flex-direction: column;
    }
`
