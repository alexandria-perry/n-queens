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

  // console.log('Single solution for ' + num + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// try and formulate a recursive function
window.countNRooksSolutions = function(num) {
  var boardObj = {};
  var count = 0;
  var boundary = 1;
  for (var i = 1; i < num ; i++){
  	boundary = boundary * i;
  }
  for(var i = 0; i < boundary; i++){
    boardObj[count] = new Board({ n: num});
    boardObj[count].togglePiece(0, );//continue here
	count++;
  }
  var rookBoard = function(num,j){
    var objLen = Object.keys(boardObj).length;
    var testObj;
    for (key in boardObj){
      testObj = boardObj[key];
      for (var i = 0; i < num; i++){
        testObj.togglePiece(j,i);
        if(testObj.hasAnyRooksConflicts()) {
          testObj.togglePiece(j,i);
        }
        else{
            boardObj[count] = new Board(testObj.rows());
        }
      }
    }
  }
  
  for (var i = 0; i < num; i++){
    rookBoard(num, i);
    for (key1 in boardObj){
      var compare = JSON.stringify(boardObj[key1].rows());
      for (key2 in boardObj){
        if (key1 === key2){}
        else {
          if (compare === JSON.stringify(boardObj[key2].rows())) {
            delete boardObj[key2];
          }
        }
      }
    }
    for(key in boardObj){
      console.log(Object.keys(boardObj), count);
    }
  }
  // for (key1 in boardObj){
  // 	var compare = JSON.stringify(boardObj[key1].rows());
  // 	for (key2 in boardObj) {
  // 		if (key1 === key2){
  // 		}else{
  // 			if(compare === JSON.stringify(boardObj[key2].rows())){
  // 				delete boardObj[key2];
  // 			}
  // 		}
  // 	} 
  // }
  var solutionCount = Object.keys(boardObj).length;

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
