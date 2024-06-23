import image from '../assets/goblin.png';

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    console.log(this.gameBoard); 
    this.wins = 0;
    this.loses = 0;
    this.rounds = 0;
  }

  createGameBoard() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
      this.gameBoard.appendChild(cell);
      }
    }
  }

  startGame() {
    this.createGameBoard();
    this.addImg();
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    const winsCounter = document.querySelector('.counter_win');
    const losesCounter = document.querySelector('.counter_lose');
    const roundsCounter = document.querySelector('.counter_round');
    winsCounter.textContent = `Победы: ${this.wins}`;
    losesCounter.textContent = `Промахи: ${this.loses}`;
    roundsCounter.textContent = `Количество попыток: ${this.rounds}`;

    if (event.target.className === 'aim') {
      this.wins += 1;
      winsCounter.textContent = `Победы: ${this.wins}`;
    }

    if (event.target.className !== 'aim') {
      this.loses += 1;
      losesCounter.textContent = `Промахи: ${this.loses}`;
    }
    this.rounds += 1;
    roundsCounter.textContent = `Количество попыток: ${this.rounds}`;

    if (this.loses >= 10) {
      document.body.insertAdjacentHTML(
        'beforeEnd',
        `<div class="modal-container">
    <div class="modal">
      <div class="modal-message">
      You missed the goblins!
      </div>
      <button class="close-btn">
       Try again 
      </button>
    </div>
  </div>`,
      );

      document
        .querySelector('.close-btn')
        .addEventListener('click', () => {
          document.querySelector('.modal-container').remove();
        });
      this.resetGame();
    }
  }

  resetGame() {
    this.wins = 0;
    this.loses = 0;
    this.rounds = 0;
  }

  addImg() {
    const cells = this.gameBoard.querySelectorAll('.cell');
    let prevPosition = -1;
    let position;
    const goblin = document.createElement('img');
    goblin.setAttribute('src', image);
    goblin.classList.add('aim');

    this.gameBoard.addEventListener('click', (event) => this.handleClick(event));

    this.intervalId = setInterval(() => {
      do {
        position = cells[Math.floor(Math.random() * cells.length)];
      } while (position === prevPosition);

      prevPosition = position;
      position.appendChild(goblin);
    }, 1000);
  }
}
