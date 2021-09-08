import React, { useState }  from 'react';
import Board from './Board'
import './styleComponent/Game.css'
import { calculationWiner } from './calculationWinnings';

const Game = () => {
    const [board, boardState] = useState(Array(9).fill(''));
    const [playerX, setPlayerX] = useState(true);
    const winner = calculationWiner(board);
    let [count] = useState(0)
    
    const handleClick = (index) => {
        const copyBoard = [...board];

        if (winner || copyBoard[index]) return;
        copyBoard[index] = playerX ? 'X' : '0';
        boardState(copyBoard)
        setPlayerX(!playerX)
    }

    const countUser = () => { 
        if(winner === '0') return count = count + 1;
    }

    const countPlayer = () => {
        if(winner === 'X') return count = count + 1;
    }
    
    const startNewGame = () => {
        let arr = [];
        board.map((cell) => {
            if(cell !== '') arr.push(cell)
        })
      
        if (arr.length === 9)  {
             window.location.reload() 
            return 'You played a draw';
        }     

        if(winner === 'X' || winner === '0') {
            window.location.reload()
        }
    }

    return (
        <div className="container">
            <div className='text'>
                <p>{startNewGame()}</p>
            </div>
            <div>
               <Board squares={board} click={handleClick}/> 
            </div>
            <div>
                <p className="score">Score</p>           
                <p className="player-1">Player: {countUser()}</p>
                <p className="player-2">Player 2: {countPlayer()} </p>
            </div>
        </div>
    );
}

export default Game;
