const _ = require('lodash');

class TicTackToe {
  constructor() {
    this.grid = [];
    this.player1Name = '';
    this.player2Name = '';
    this.player1Peices = '';
    this.player2Peices = '';
    this.currentPlayer = '';
    this.winner = '';
    this.loser = '';
  };

  generateBlankGrid() {
    for (var i = 0; i < 3; i++) {
      this.grid.push(Array(3));
    }
    return;
  };

  getPlayersNames() {
    // Ask for player 1's name
    // Store it
    // this.player1Name

    // Ask for player 2's name
    // Store it
    // this.player2Name
    return;
  };

  listenForPlayerMove() {
    // Print grid layout to console
    // Print possible moves to console
    // Listen for user input
    const 
    
    var stdin = process.openStdin();

    stdin.addListener("data", function(d) {
      console.log("you entered: [" + 
          d.toString().trim() + "]");
    });

    // Check user input for a valid move
    // Check if winner with last user input
    // checkWinner('');
    // Update next player if there is no winner
    if (this.winner !== '') {
      this.currentPlayer = this.currentPlayer === 'player1' ? 'player2' : 'player1';
    }
  }

  checkWinner() {

  }

  startGame() {
    this.generateBlankGrid();
    this.getPlayersNames();

    while (this.winner === '') {
      this.listenForPlayerMove();
    }
    // Log winner to console
    console.log(`The winner is ${this.winner}!!!`);
    return;
  };

};

module.exports = TicTackToe;
