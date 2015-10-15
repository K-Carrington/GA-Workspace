//flash_card_challenge.js

//TBD change to read from firebase, e.g.:
//var myDataRef = new Firebase('https://fojghtialw9.firebaseio-demo.com/');
//myDataRef.set('User ' + name + ' says ' + text); //write a string
//myDataRef.set({name: name, text: text}); //write an obj (dict/hash)
//myDataRef.push({name: name, text: text}); //to build a list/array of obj's

// Deck class (object constructor function) fior future functionality
// (Using card_deck object now)
// later put deck info from load_flash_card_data into here or use firebase
// or some other data source
var Deck = function(name, diff_level, format, location) {
  this.name = name;
  this.difficulty = diff_level;
  this.format = format;
  this.location = location;
}

var cs_deck_str = 'CS';
var linux_deck_str = 'LNX';
var linux_flip_deck_str = 'LNX_FLIP';
var js1_deck_str = 'JS1';
var js2_deck_str = 'JS2';
var vim_deck_str = "VIM";
var nk5_deck_str = 'N5K';
var nk5_flip_deck_str = 'N5K_FLIP';
var nk4_deck_str = 'N4K';
var nk4_flip_deck_str = 'N4K_FLIP';
// set deck dropdowns with above strings

var card_deck = {};
card_deck[cs_deck_str] = Computer_Sci;

card_deck[linux_deck_str] = LinuxCommands;
card_deck[linux_flip_deck_str] = flip(LinuxCommands);

card_deck[js1_deck_str] = Javascript1_cards;
card_deck[js2_deck_str] = JS2_Sivers;
card_deck[vim_deck_str] = Vim;

card_deck[nk5_deck_str] = N5_Kanji;
card_deck[nk5_flip_deck_str] = flip(N5_Kanji);

card_deck[nk4_deck_str] = N4_Kanji;
card_deck[nk4_flip_deck_str] = flip(N4_Kanji);

function flip(a_deck){
  var temp = [];
  console.log("In flip a deck length = " + a_deck.length);
  for (var i = 0; i < a_deck.length; i++) {
    temp[i] = [a_deck[i][1], a_deck[i][0]];
  }
  return temp;
}

  // Starts out with all major divs at display:none / hide except for the first one. 
  // Screens are transitioned by display:none-ing other screens

  var whos_turn = 1;
  var player1 = {};
  var player2 = {};
  var game = {};
  var game_result = {};
  var picked_q_cards = {};

  function setup_new_game() {
    $('#player_setup_screen').hide();
    $('#main_screen').hide();
    $('#game_result_screen').hide();
    $('#intro_screen').show();
    picked_q_cards = {};
    whos_turn = 1;
    //player1 = {};
    //player2 = {};
    //game = {};
    //game_result = {};
    player1.points_scored = 0;
    player2.points_scored = 0;

    $(".multi_answers").off('click');
    $('#player1_progress').height(0);
    $('#player2_progress').height(0);
  }
  setup_new_game();

  // Game class (object constructor function)
  var Game = function () {
    var number_of_cards = 0; //player selected for the game
    var card_count = 0; //number played so far
    var elapsedTime_id;
    var correct_a_index;
    var player_transition = false;

    this.introGame = function() {
      $('#to_2nd_screen_button').click(function(){
        number_of_cards = $('#num_cards').val();
        console.log("num cards = " + number_of_cards);
        $('#intro_screen').hide();
        $('#player_setup_screen').show();
      });
    }

    // local function
    // change font depending on string length
    function set_font_size_based_on_strlen(str, dom_elem) {
      if (str.length < 25) {
        $(dom_elem).css('fontSize', '30px');
      }
      else if (str.length < 50) {
        $(dom_elem).css('fontSize', '24px');
      }
      else if (str.length < 110) {
        $(dom_elem).css('fontSize', '18px');
      }
     else {
        $(dom_elem).css('fontSize', '12px');
      } 

    }

    // local fucntion
    // display data from one flashcard (based on deck player chose and 
    // random selection minus cards that have been slected befre)
    function display_q_and_answers(player) {
      // randomly select card, save to not re-display, display it with it's answer and 3 other randomly selected answers randomly distributed.
      var curr_deck = [];
      var time_limit;
      if (player === 1) {
        console.log("player 1 chosen_deck = " + player1.getChosenDeck());
        curr_deck = card_deck[player1.getChosenDeck()];
        console.log("player 1 chosen time = " + player1.getChosenTime());
        time_limit = player1.getChosenTime();
      }
      else {
        console.log("player 2 chosen_deck = " + player2.getChosenDeck());
        curr_deck = card_deck[player2.getChosenDeck()];
        console.log("player 2 chosen time = " + player2.getChosenTime());
        time_limit = player2.getChosenTime();
      }

      if (typeof curr_deck === 'undefined') { //Reset game if deck not clicked
        console.log("curr_deck not clicked!!")
        setup_new_game();
        alert("Please select decks for both players!");
        return;
      }

      // pick random (1..num cards)
      // keep list of cards already done, 
      // keep min deck length (the number of cards in game * 2) + 3
      //
      // loop 3 times to find unique cards that haven't been used for questions and to 
      // also keep them uniqe for this round of answers
      //
      // i is index of correct q/a card
      var i = Math.floor((Math.random()) * curr_deck.length);
      console.log("rand i = " + i);
      while (picked_q_cards[i]) {
        i = Math.floor((Math.random()) * curr_deck.length);
        console.log("rand i = " + i); 
      }
      picked_q_cards[i] = true;
        
      //j is to randomly place the correct answer
      var j = Math.floor((Math.random()) * 4); 
      console.log("rand j = " + j);

      // find 3 unused wrong answer cards
      var picked_a_cards = {};
      var x = Math.floor((Math.random()) * curr_deck.length); //to select a wrong ans
      console.log("rand x = " + x);
      while (picked_q_cards[x] || picked_a_cards[x]) {
        x = Math.floor((Math.random()) * curr_deck.length);
        console.log("rand x = " + x);
      }
      picked_a_cards[x] = true;

      var y = Math.floor((Math.random()) * curr_deck.length); //to select a wrong ans
      console.log("rand y = " + y);
      while (picked_q_cards[y] || picked_a_cards[y]) {
        y = Math.floor((Math.random()) * curr_deck.length);
        console.log("rand y = " + y);
      }
      picked_a_cards[y] = true;

      var z = Math.floor((Math.random()) * curr_deck.length); //to select a wrong ans
      console.log("rand z = " + z);
      while (picked_q_cards[z] || picked_a_cards[z]) {
        z = Math.floor((Math.random()) * curr_deck.length);
        console.log("rand z = " + z);
      }

      var a,b,c,d;
      switch (j) { //scramble correct answer with others' based on j
          case 0:
            a = i; b = x; c = y; d = z;
            break;
          case 1:
            a = x; b = i; c = y; d = z;
            break;
          case 2:
            a = x; b = y; c = i; d = z;
            break;
          case 3:
            a = x; b = y; c = z; d = i;
            break;
          default:
            console.log("***ERROR*** random j not 0..3!!!")
        }
        
        set_font_size_based_on_strlen(curr_deck[i][0], '#question');
        $('#question').html(curr_deck[i][0]);
        set_font_size_based_on_strlen(curr_deck[a][1], '#answer1');
        $('#answer1').html(curr_deck[a][1]);
        set_font_size_based_on_strlen(curr_deck[b][1], '#answer2');
        $('#answer2').html(curr_deck[b][1]);
        set_font_size_based_on_strlen(curr_deck[c][1], '#answer3');
        $('#answer3').html(curr_deck[c][1]);
        set_font_size_based_on_strlen(curr_deck[d][1], '#answer4');
        $('#answer4').html(curr_deck[d][1]);
        $('#answer1').fadeIn(1000);
        $('#answer2').fadeIn(1000);
        $('#answer3').fadeIn(1000);
        $('#answer4').fadeIn(1000);

        player_transition = false;

        var elapsedTime = 0;
        // ** reset timeout **
        elapsedTime_id = setInterval(function(){
          elapsedTime++;
          $('#elapsed-time').text("Elapsed time: " + elapsedTime + " time limit: " 
              + time_limit);
          if (elapsedTime === time_limit-1) {
            $('#answer1').fadeOut(1000);
            $('#answer2').fadeOut(1000);
            $('#answer3').fadeOut(1000);
            $('#answer4').fadeOut(1000);
          }
          if (elapsedTime >= time_limit) {
            player_transition = true;
            
            if (player === 1) {
              $('#p1_progress_text').text(player1.getName() + " is too slow");
            }
            else {
              $('#p2_progress_text').text(player2.getName() + " is too slow");
            }
            //console.log("TIMING OUT TO NEXT PLAYER");
            clearInterval(elapsedTime_id);
            next_player();
          }
      }, 1000);

      return j;
    } // display_q_and_answers

    //local function
    function next_player() {
      // if number of cards done, display game result (go to 4th screen)
      console.log("In next_player, card_count = " + card_count + ", number_of_cards = "
        + number_of_cards);
      if (whos_turn === 2 && (card_count == number_of_cards)) {
        //console.log("p1 pts = " + player1.points_scored + ", p2 pts = " + player2.points_scored);
        game_result.player1_pts = player1.points_scored;
        game_result.player2_pts = player2.points_scored;
        $('#main_screen').hide();
        $('#game_result_screen').show();
        game_result.displayWinner();
      }
      else {
        if (whos_turn === 1) {
          whos_turn = 2;
          $('#player').text(player2.getName() + "'s turn (" + player2.getChosenDeck() + ")");
          correct_a_index = display_q_and_answers(whos_turn);
        }
        else { // player 2 just went
          card_count++;
          whos_turn = 1;
          $('#player').text(player1.getName() + "'s turn (" + player1.getChosenDeck() + ")");
          correct_a_index = display_q_and_answers(whos_turn);
        }
      }
    }

    this.playGame = function() {
      // play game alternating users starting with player 1
      $('#p1_progress_text').text(player1.getName());
      $('#p2_progress_text').text(player2.getName());
      $('#player').text(player1.getName() + "'s turn (" + player1.getChosenDeck() + ")");
      card_count = 1; //will have already gone through first round by incr time
      correct_a_index = display_q_and_answers(1);
      
      //
      // *** Answer Handler ***
      //
      $('.multi_answers').click(function() {
        if (player_transition) {
          console.log("Box " + this.id + " clicked during player transition!");
          return;
        }
        player_transition = true;
        //console.log("Box " + this.id + " clicked!");
        
        // stop timer
        clearInterval(elapsedTime_id);

        //get clicked on answer
        var box_idx = this.id;
        var tmp = box_idx.split('');
        box_idx = tmp[1] - 1;
  
        //console.log("chosen ans = " + box_idx + ", correct ans = " + correct_a_index);
        // * display card result *
        if (box_idx === correct_a_index) {
          // add a point for player
          if (whos_turn === 1) {
            player1.points_scored++;
            $('#p1_progress_text').text(player1.getName() + " is Correct!");
            var p1_progress_height = (player1.points_scored / number_of_cards) * 400;
            //console.log("p1 prog height = " + p1_progress_height);
            $('#player1_progress').height(p1_progress_height);
          }
          else {
            player2.points_scored++;
            $('#p2_progress_text').text(player2.getName() + " is Correct!");
            var p2_progress_height = (player2.points_scored / number_of_cards) * 400;
            //console.log("p1 prog height = " + p1_progress_height);
            $('#player2_progress').height(p2_progress_height);
          }
        }
        else { // player is wrong
          if (whos_turn === 1) {
            $('#p1_progress_text').text(player1.getName() + " is Wrong");
          }
          else {
            $('#p2_progress_text').text(player2.getName() + " is Wrong");
          }
        }
         next_player();
      }); // answer handler

    } //play_game function
  } // Game class obj constructor function
  game = new Game();

  // Set up 1st screen button event handler to log number of cards selected and go to 2nd screen
  game.introGame();
  

  // Player class (object constructor function)
  var Player = function (player_num) { 
    var name = null;
    var chosen_deck = null;
    var chosen_time = 0;
    this.points_scored = 0;

    this.setupPlayer = function() {
      $('#to_3rd_screen_button').click(function(){
        chosen_deck = $('#deck'+player_num).val();
        name = $('#player_name'+player_num).val();
        if (name === '') {
          name = "Player_"+player_num;
        }
        chosen_time = $('#time_limit'+player_num).val();
        console.log("Player " + player_num + " chosen deck = " + chosen_deck + ", name = " 
          + name + ", time lim = " + chosen_time);
        // error-->reset if no deck is chosen
        $('#player_setup_screen').hide();
        $('#main_screen').show();
        if (player_num === 2) { //only want to call this once
          game.playGame();
        }
     });
    } // setupPlayer function

    //Set through setter function, so need getting function and to use local vars
    this.getName = function() {
      return name;
    }
    this.getChosenDeck = function() {
      return chosen_deck;
    }
    this.getChosenTime = function() {
      return chosen_time;
    }

  } // Player class obj constructor function
  player1 = new Player(1);
  player2 = new Player(2);

  // Set up 2nd screen button handler to log user info, go to 2nd user one if coming 
  //     coming from 1st user, else go to 3rd screen
  player1.setupPlayer();
  player2.setupPlayer();
  

  // Result class (object constructor function)
  var Result = function() {
    this.winner = null;    // no setter function so this s/be ok
    this.player1_pts = 0;
    this.player2_pts = 0;
    this.displayWinner = function() {
      //console.log("In displayWinner, p1\'s " + this.player1_pts + ", p2\'s " + this.player2_pts)
      if (this.player1_pts > this.player2_pts) {
        this.winner = player1.getName() + " wins!";
      }
      else if (this.player1_pts < this.player2_pts) {
         this.winner = player2.getName() + " wins!";
      }
      else {
        this.winner = "A Tie!";
      }
      $('#game_result').html('Results: ' + this.winner + " (" + 
        player1.getName() + ": " + this.player1_pts + " " +
        player2.getName() + ": " + this.player2_pts + ")");
    }
   
    // set-up new game button handler, zero/reset everything...
    $('#new_game_button').click(function(){
      console.log("new_game_button clicked");
      setup_new_game();
    });
  } // Result class obj constructor function
  game_result = new Result();


