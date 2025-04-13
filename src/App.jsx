import React, { useState } from 'react';
import './index.css';
import Player from './components/Player.jsx' 
import GameBoard from "./components/GameBoard.jsx"


function App() {

  const [activePlayer, setActivePlayer] = useState('S');
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'S' ? 'O' : 'S');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'S';

      if(prevTurns.length>0 && prevTurns[0].player === 'S'){
        currentPlayer = 'O';  // atama yapmaktayız
      }

      const updateTurns =[
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns,
      ]
      return updateTurns;
    })
  }
    return (

      <main>
        <h1 className='Header' >SOS</h1>
          <div id="game-container">
            <ol id="players" className='highlight-player'>
              <Player baslangic_ismi="Player 1" sembol="S" isActive={activePlayer === 'S'} /><br></br>
              <Player baslangic_ismi="Player 2" sembol="O" isActive={activePlayer === 'O'}/>

            </ol>
              <GameBoard onSelectSquare={handleSelectSquare } turns={gameTurns}  />
          </div>

      </main>
    );
}

export default App
