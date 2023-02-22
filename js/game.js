// import {
//     gameData,
//     players,
//     gamePlayerData,
//     gameOverElement,
//     gameBoardElement,
//     gameAreaElement,
//     activePlayerNameElement
// } from "./tictac.js";

function reset() {
    gamePlayerData.activePlayer = 0;
    gamePlayerData.currentRound = 1;
    gamePlayerData.gameisover = false;
    gameOverElement.firstElementChild.innerHTML =
        'You won, <span id = "winner-name">PLAYER NAME </span>!';
    gameOverElement.style.display = 'none';

    let gameBoardindex = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            gameData[i][j] = 0;
            const gameboarditemelement = gameboardelement.children[gameBoardindex];
            gameBoardElement.children[gameBoardindex].textContent = '';
            gameboarditemelement.classList.remove('disabled');
            Boardindex++;
        }
    }
}
function startNewGameBtn() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set player names for both players!');
        return;
    }

    // reset();
    activePlayerNameElement.textContent = players[gamePlayerData.activePlayer].name;
    gameAreaElement.style.display = 'block';
}
 function switchplayer() {
    if (gamePlayerData.activePlayer === 0) {
        gamePlayerData.activePlayer = 1;
    }
    else {
        gamePlayerData.activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[gamePlayerData.activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gamePlayerData.gameisover) {
        return;
    }
    const selectedColumn = +event.target.dataset.col;
    const selectedRow = +event.target.dataset.row;
    // console.log(selectedRow, selectedColumn)
    
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Select empty cell stupid!')
        return;
    }
    
    event.target.textContent = players[gamePlayerData.activePlayer].symbol;
    event.target.classList.add('disabled');
    
    
    
    gameData[selectedRow][selectedColumn] = gamePlayerData.activePlayer + 1;
    console.log(gameData[selectedRow][selectedColumn]);

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    }
    gamePlayerData.currentRound++;
    switchplayer();
}
function checkForGameOver() {
    // if(
    //     gameData[0][0] > 0 &&
    //     gameData[0][0] === gameData[0][1] && 
    //     gameData[0][1] === gameData[0][2]
    // ){
    //     return gameData[0][0];
    // }
    // if(
    //     gameData[1][0] > 0 &&
    //     gameData[1][0] === gameData[1][1] && 
    //     gameData[1][1] === gameData[1][2]
    // ){
    //     return gameData[1][0];
    // }
    // if(
    //     gameData[2][0] > 0 &&
    //     gameData[2][0] === gameData[2][1] && 
    //     gameData[2][1] === gameData[2][2]
    // ){
    //     return gameData[2][0];
    // }
    for (let i = 0; i < 3; ++i) { // for rows
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    for (let i = 0; i < 3; ++i) { // for col
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }
    if (gamePlayerData.currentRound === 9) {
        return -1;
    }
    return 0;
}
function endGame(winnerId) {
    gamePlayerData.gameisover = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else {
        gameOverElement.firstElementChild.textContent = 'It\'s a DRAW';
    }
}