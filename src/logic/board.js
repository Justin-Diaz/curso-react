  import { WINNER_COMBOS } from "../constants";
  
  //revisamos las combinaciones para ver quien gano
  export const checkWinnerFrom = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      )
        {
          return boardToCheck[a];
        }
    }

    //si no hay ganador
    return null;
  }

    //checar si el juego a terminado
    export const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square != null)
      }