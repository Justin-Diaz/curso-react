import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti';
//importar el componente square
import { Square } from './components/Square';
//importar constantes
import { TURNS } from './constants';

import { checkWinnerFrom, checkEndGame } from './logic/board';

import { WinnerModal } from './components/WinnerModal';

import { saveGameToStorage, resetGameStorage } from './logic/storage';

function App() {

  //tablero con las 9 posiciones
  const [board, setBoard] = useState(() => {
    //obtener la partida guardada en el almacenamiento local
    const boardFromStorage = window.localStorage.getItem('board');
    //si hay partida guardada la muestra, sino muestra la partida nueva
    return boardFromStorage? JSON.parse(boardFromStorage) : Array(9).fill(null);
  }

  );
  //turno de los jugadores
  const [turn, setTurn] =useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage?? TURNS.X; 
  }

  );
  //asignar un ganador
  //(null)=no hay ganador, (false)=hay un empate
  const [winner, setWinner] = useState(null);

  //resetear todos los estados para empezar desde cero
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    //eliminar el tablero del local storage
    resetGameStorage();
  }

  //actualizar el tablero
  const updateBoard = (index) => {

    //no actualizar si la posicion ya tiene algo
    if (board[index] || winner) return;

    //spread y rest operator
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //asignar los turnos de los jugadores
    const newTurn = turn === TURNS.X? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //GUARDAR PARTIDA

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })


    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner)
      {
        confetti();
        setWinner(newWinner)
      }
    else if (checkEndGame(newBoard)) 
      {
        setWinner(false);
      }
  }

  return (

    <main className='board'>

      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar del juego</button>

      <section className='game'>
        
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                //paso la funcion, mas no la ejecucion de la misma
                updateBoard={updateBoard}
              >
                  {square}
              </Square>
            )
          })
        }

      </section>

      <section className='turn'>

        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
