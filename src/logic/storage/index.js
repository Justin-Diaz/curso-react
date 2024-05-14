//GUARDAR PARTIDA
export const saveGameToStorage = ({board, turn}) => {
    //guardar el tablero
    window.localStorage.setItem('board', JSON.stringify(board));
    //guardar el turno
    window.localStorage.setItem('turn', turn);
}

//ELIMINAR PARTIDA
export const resetGameStorage = () => {
    //resetear el tablero
    window.localStorage.removeItem('board');
    //resetear el turno
    window.localStorage.removeItem('turn');
}