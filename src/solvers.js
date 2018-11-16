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

var iterator = function(row, n, board, check, func){
  if(row === n){
    return func();
  }
  for (var i = 0; i < n; i++){
    board.togglePiece(row, i);
    if(!board[check]() ) {
      var result = iterator(row + 1, n, board, check, func);
      if( result ){
        return result;
      }
    }
    board.togglePiece(row, i);
  }
}

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = iterator(0, n, board, "hasAnyRooksConflicts", function(){
    return board.rows();
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;
  iterator(0, n, board, "hasAnyRooksConflicts", function(){
      solutionCount++;
  });
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n:n});
  if (n === 2 || n === 3){
    return board.rows();
  }
  var solution = iterator(0, n, board, "hasAnyQueensConflicts", function(){
    return board.rows();
  }); //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if ( n === 2 || n === 3){
    return 0;
  }
  var board = new Board({n:n});
  var solutionCount = 0;
  iterator(0, n, board, "hasAnyQueensConflicts", function(){
      solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};