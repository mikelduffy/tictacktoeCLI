const expect = require('chai').expect;
const TicTackToe = require('./tictactoe');

describe ('TicTacToe CLI Game', () => {
  it('Should generate a blank 3x3 grid.', () => {
    const game = new TicTackToe();
    game.generateBlankGrid();
    expect(game.grid.length).to.equal(3);
    expect(game.grid[0].length).to.equal(3);
    expect(game.grid[1].length).to.equal(3);
    expect(game.grid[2].length).to.equal(3);
  });

  
});
