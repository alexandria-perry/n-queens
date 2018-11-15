window.findNRooksSolution = function(num) {
  //factoral function to account for total possibilities of num X num matrix

  var board = new Board(({n:num}));
  for(var i = 0; i < num; i++){
    var random = Math.floor(Math.random()*num);
    board.togglePiece(i,random);
    if(board.hasAnyRooksConflicts()){
      board.togglePiece(i, random);
      i--;
    }else{
    
    }
  }
console.log('Single solution for ' + num + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

window.countNRooksSolutions = function(num) {
  var solutionArray = [];
  for 
}