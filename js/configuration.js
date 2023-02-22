// import {
//   players,
//   gamePlayerData,
//   playerConfigOverlayElement,
//   backdropElement,
//   formElement,
//   errorsOutputElement
// } from "./tictac.js";

function openPlayerConfig(event) {
  // const selectedPlayerId = event.target.dataset.playerid;
  gamePlayerData.editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

 function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

 function savePlayerConfig(event) {
//   console.log(event);
  event.preventDefault();
  const formData = new FormData(event.target);
//   console.log(formData);
  const enteredPlayername = formData.get('playername').trim();
  // console.log(enteredPlayername);

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }
  const updatedPlayerDataElement = document.getElementById('player-' + gamePlayerData.editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[gamePlayerData.editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
