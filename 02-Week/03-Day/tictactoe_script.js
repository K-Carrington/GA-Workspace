var ttt_board = [null, null, null,
              null, null, null,
              null, null, null];
 
 var whos_turn = "X"; // X will go first

 xImg = '<img src=\"http://www.noozhawk.com/images/uploads/120910-bandx-300.jpg\" style=\"width: 60px; height: 60px; margin: 0 auto; margin-top: 10px; \" />';

 oImg = '<img src=\"http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2012/11/Fotolia_26392577_Subscription_XL-300x300.jpg\" style=\"width: 60px; height: 60px; margin: 0 auto; margin-top: 10px; \" />';


  // Check winner function
  function check_for_winner(checking) { // checking = "X" or "O"
    var winner = false;
    
    // Check across
    for (var i = 0; i < 3; i++) {
      for (var j = i*3; j < i*3 + 3; j++) {
        if (ttt_board[j] === checking) {
          winner = true;
        }
        else {
          winner = false;
          break;
        }
      }
      if (winner === true) {
        return winner;
      }
    }

    // Check down
    for (var i = 0; i < 3; i++) {
      for (var j = i;  j < i + 7; j += 3) {
        if (ttt_board[j] === checking) {
          winner = true;
        }
        else {
          winner = false;
          break;
        }
      }
      if (winner === true) {
        return winner;
      }
    }
    
    //Check both diagonals
    if ((ttt_board[0] === checking) && (ttt_board[4] === checking) && (ttt_board[8] === checking)) {
      winner = true;
    }
    if ((ttt_board[2] === checking) && (ttt_board[4] === checking) && (ttt_board[6] === checking)) { 
      winner = true;
    }

    return winner;
  }

  function game_over(winner) {
    for (var i = 0; i < 9; i++) {
      ttt_board[i] = winner;
    }

    if (winner === "X") {
       $('#result_img').html(xImg);
    }
    else {
      $('#result_img').html(oImg);
    }

    $('#result').text(" wins!");

    whos_turn = "X";
  }

  // Set up board event listeners
  $('.ttt_square').click(function(){
    console.log("Box " + this.id + " clicked!");
        
    //Check if already clicked
    var box_idx = this.id;
    var tmp = box_idx.split('');
    box_idx = tmp[1] - 1;

    // if position already taken
    if (ttt_board[box_idx] != null) {
      return;
    }
    else if (whos_turn === "O") {
          
    //Update ttt_board array
    ttt_board[box_idx] = 'O';

    this.innerHTML = oImg;
    whos_turn = "X";

    var winner = check_for_winner("O");
    console.log("O is winner = " + winner);
    if (winner) {
        game_over("O");
      }
    }
    else { //X
      //Update ttt_board array
      ttt_board[box_idx] = 'X';
        
      this.innerHTML = xImg;
      whos_turn = "O";

      var winner = check_for_winner("X");
      console.log("X is winner = " + winner);
      if (winner) {
        game_over("X");
      }
    }
  }); 

  // Clear button handler
  $('#clear_button').click(function(){
    // Clear board
    var box;
    for (var i = 0; i < 9; i++) {
      $('#b'+(i+1)).html('');
      ttt_board[i] = null;
    }
    $('#result_img').html('');
    $('#result').text('');
    whos_turn = "X";
  });