import image from "../assets/goblin.png";

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector(".game-board");
    console.log(this.gameBoard);
    this.wins = 0;
    this.loses = 0;
    this.winsCounter = document.querySelector(".counter_win");
    this.losesCounter = document.querySelector(".counter_lose");
    this.intervalId = null;
  }

  createGameBoard() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        this.gameBoard.appendChild(cell);
      }
    }
  }

  startGame() {
    this.createGameBoard();
    this.addImg();
  }
  countVictory() {
    this.wins += 1;
    this.winsCounter.textContent = `Победы: ${this.wins}`;
  }
  countMisses() {
    this.loses += 1;
    this.losesCounter.textContent = `Промахи: ${this.loses}`;
  }
  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    if (!event.target.classList.contains("aim")) {
      return;
    }
    this.countVictory();
    event.target.removeEventListener("click", this.handleClick);

    document.querySelector(".aim").remove();
    clearInterval(this.intervalId);
    this.addImg();
  }

  resetGame() {
    this.wins = 0;
    this.loses = 0;
    this.rounds = 0;
  }

  addImg() {
    if (document.querySelector(".aim")) {
      document.querySelector(".aim").remove();
      this.countMisses();
      clearInterval(this.intervalId);
      if (this.loses >= 5) {
        document.body.insertAdjacentHTML(
          "beforeEnd",
          `<div class="modal-container">
      <div class="modal">
        <div class="modal-message">
        You missed the goblins!
        </div>
        <button class="close-btn">
         Try again 
        </button>
      </div>
    </div>`
        );

        document.querySelector(".close-btn").addEventListener("click", () => {
          document.querySelector(".modal-container").remove();
        });
        this.resetGame();
      }
    }
    const cells = this.gameBoard.querySelectorAll(".cell");
    let randomPosition = Math.floor(Math.random() * cells.length);
    while (randomPosition === this.position) {
      randomPosition = Math.floor(Math.random() * cells.length);
    }
    let randomCell = cells[randomPosition];
    this.position = randomPosition;
    const goblin = document.createElement("img");
    goblin.setAttribute("src", image);
    goblin.classList.add("aim");
    randomCell.appendChild(goblin);
    goblin.addEventListener("click", this.handleClick.bind(this));
    this.intervalId = setInterval(this.addImg.bind(this), 1000);
  }
}
