// import openPlayerConfig from './configuration.js'
// import closePlayerConfig from './configuration.js'
// import savePlayerConfig from './configuration.js'

// import { savePlayerConfig } from "./configuration";

// import reset from './game.js';
// import { startNewGameBtn, switchplayer, selectGameField, checkForGameOver, endGame } from './game.js';

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const gamePlayerData = {
  editedPlayer: 0,
  activePlayer: 0,
  currentRound: 1,
  gameisover: false
}

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
// console.log(formElement.firstElementChild);
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');

const activePlayerNameElement = document.getElementById('active-player-name');

const gameOverElement = document.getElementById('game-over')

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

//   console.log('Submitted');
//   savePlayerConfig();
//   console.log('Exit...')
// });

startNewGameBtnElement.addEventListener('click', startNewGameBtn);

gameBoardElement.addEventListener('click', selectGameField);

// export {
//   gamePlayerData,
//   gameData,
//   playerConfigOverlayElement,
//   backdropElement,
//   formElement,
//   errorsOutputElement,
//   gameOverElement,
//   gameBoardElement,
//   gameAreaElement,
//   activePlayerNameElement
// };