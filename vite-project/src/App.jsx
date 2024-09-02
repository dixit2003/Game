import HomePage from "./components/HomePage"
import GamePage from "./components/GamePage";
import React, { useState } from "react";


function App() {
  const [isGameStarted, setGame] = useState(false);
  const toggleGamePlay = () => {
    setGame((prev) => !prev)
  }
  return(
    <>
      {
        isGameStarted ? <GamePage /> : <HomePage 
        toggle = {toggleGamePlay}/>
      }
      
    </>
  )
  
}

export default App
