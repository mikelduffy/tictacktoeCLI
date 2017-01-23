const _ = require('lodash');

class TicTackToe {
  constructor() {
    this.grid = [];
    this.player1Name = '';
    this.player2Name = '';
    this.winner = '';
    this.loser = '';
  };

  generateBlankGrid() {
    for (var i = 0; i < 3; i++) {
      this.grid.push(Array(3));
    }
  };

  getPlayersNames() {

  };

  receivePlayerMove() {

  }

  checkMove() {

  }

  startGame() {
    this.generateBlankGrid();
    // this.getPlayersNames();

    // while (this.winner === '') {
      
    // }
  };

};

module.exports = TicTackToe;
