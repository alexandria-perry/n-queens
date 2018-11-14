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



window.findNRooksSolution = function(num) {
  if (!board) {
    var board = new Board({ n: num});
  }
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }
  //find index of piece
  //use row/col check functions
  //
  
  
  var solution = board.rows();

  console.log('Single solution for ' + num + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(num) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  if (!board) {
    var board = new Board({ n: num});
  }
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts) {
        board.togglePiece(i, j);
      }
    }
  }
  var solution = board.rows(); //fixme

  console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
