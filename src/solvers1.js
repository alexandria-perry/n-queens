/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = makeEmptyBoardMatrix(n);
  var board = new Board(solution);

  var builder = function(n, row, board){
    if(row === n){
      solution = board;
      found = 1;
    }
    while(!found){
      for (var i = 0; i < n; i++){
        board.setPiece(row, i, 1);
        if(board.hasAnyRooksConflicts() === false){
          builder(n, row + 1, board);
        }
        board.setPiece(row, i, 0);
      }
    }
  }
  builder(n, 0, board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// try and formulate a recursive function
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  var solution = undefined
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
