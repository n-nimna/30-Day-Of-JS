// script.js
document.getElementById('add-player').addEventListener('click', addPlayer);

function addPlayer() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country = document.getElementById('country').value;
  const playerScore = document.getElementById('player-score').value;

  if (firstName === '' || lastName === '' || country === '' || playerScore === '') {
    document.querySelector('.error-msg').style.display = 'block';
    return;
  }

  document.querySelector('.error-msg').style.display = 'none';

  const leaderboard = document.querySelector('.leaderboard');

  const playerDiv = document.createElement('div');
  playerDiv.classList.add('player');

  const playerInfo = document.createElement('div');
  playerInfo.classList.add('player-info');
  playerInfo.innerHTML = `<span>${firstName} ${lastName}</span>
                          <span>${new Date().toLocaleString()}</span>
                          <span>${country}</span>
                          <span>${playerScore}</span>`;
  
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');
  actionsDiv.innerHTML = `<button class="delete">🗑️</button>
                          <button class="increment">+5</button>
                          <button class="decrement">-5</button>`;

  playerDiv.appendChild(playerInfo);
  playerDiv.appendChild(actionsDiv);

  leaderboard.appendChild(playerDiv);

  // Add event listeners to the new buttons
  playerDiv.querySelector('.delete').addEventListener('click', () => playerDiv.remove());
  playerDiv.querySelector('.increment').addEventListener('click', () => updateScore(playerDiv, 5));
  playerDiv.querySelector('.decrement').addEventListener('click', () => updateScore(playerDiv, -5));

  // Clear input fields
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('country').value = '';
  document.getElementById('player-score').value = '';
}

function updateScore(playerDiv, amount) {
  const scoreSpan = playerDiv.querySelector('.player-info span:last-child');
  let currentScore = parseInt(scoreSpan.textContent);
  currentScore += amount;
  scoreSpan.textContent = currentScore;
}
