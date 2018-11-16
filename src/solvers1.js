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

function objCopy(input){
  var rows = Object.keys(input.rows()).length;
    //copies current object to create a copy of the new board as the current
    //togglePiece function toggles all pieces within the "all boards" object.
  var result = [];
  for (var i = 0; i < rows; i++){
    result.push(_.clone(input.rows()[i]));
  }
  return result;
}


function factorial(n){
  var value = 1;
    for (var i = 1; i < n ; i++){
      value = value * i;
    }
  return value;
}

var rook = function(num){
  var board = new Board({n:num});
  for(var i = 0; i < num; i++){
    var random = Math.floor(Math.random()*num);
    board.togglePiece(i,random);
    if(board.hasAnyRooksConflicts()){
      board.togglePiece(i, random);
      i--;
    }else{
    
    }
  }
  return board;
}

var boardIterator(){
  

}

var Queen = function(num, controller){
  if(!controller){
    controller = 0;
  }
  if(num === 2 || num === 3){
    return 0;
  }
  var testArray = [];
  var skipArray = [];
  var board = new Board({ n: num});
  for (var i = 0; i < num; i++){
    for (var j = 0; j + controller < num; j++){
      // if(_.some(skipArray, function(value){ return value === j})){
      //   j++;
      // }
      board.togglePiece(i, j + controller);
      skipArray.push([j + controller]);
      if(board.hasAnyQueensConflicts()){
        board.togglePiece(i, j + controller);
        skipArray.pop();
      }else{
        j = num;
      }
    }
  }
  testArray = _.flatten(board.rows());
  testArray = _.compact(testArray);
  if(testArray.length !== num){
    if(controller )
    controller++;
    Queen(num, controller);
    
//doesn't test for multiple valid current row declarations, fix later.
  }
  
  return board;
}

window.findNRooksSolution = function(num) {
  var board = rook(num);
  //console.log('Single solution for ' + num + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// try and formulate a recursive function
window.countNRooksSolutions = function(num) {
  var boardObj = {};
  var count = 0;
  var testArray = [];
  for(var i = 0; i < num; i++){
    boardObj[count] = new Board({ n: num});
    boardObj[count].togglePiece(0, i);
	count++;
  }

var rookBoard = function (num,j){
  var objLen = Object.keys(boardObj).length;
  var testObj;
  for (key in boardObj){
    testObj = new Board(objCopy(boardObj[key]));
    for (var i = 0; i < num; i++){
      testObj.togglePiece(j,i);
      if(testObj.hasAnyRooksConflicts()) {
        testObj.togglePiece(j,i);
      }
      else{
          boardObj[count] = new Board(objCopy(testObj));
          count++;
          testObj.togglePiece(j,i);
      }
    }
  }
}
  for (var i = 1; i < num; i++){
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
  }
  
  for (key in boardObj){
    testArray = [];
    for (var i = 0; i < num; i++){
      testArray.push(boardObj[key].rows()[i]);
    }
    testArray = _.flatten(testArray);
    testArray = _.compact(testArray);
    if (testArray.length !== num) {
      delete boardObj[key];
    }
  }
  var solutionCount = Object.keys(boardObj).length;
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  if(num === 2 || num === 3){
    return 0;
  }
  var board = Queen(num, 0);
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
