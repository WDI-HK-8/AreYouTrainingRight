var Game = function(){
  //Define value of training element
  this.cardio = [
    ["HIIT Training", 0], // 0
    ["Sprint Training", 0], //1
    ["Short Distance Running (<6km)", 0], //2
    ["Middle Distance Running (6-12km)", 0],  //3
    ["Long Distance Running (<12km)", 0], //4
    ["Boxing/Kick Boxing", 0], //5
    ["Swimming - sprints", 0], //6
    ["Swimming - long distance", 0], //7
    ["Cycling - sprints", 0], //8
    ["Cycling - long distance", 0], //9
  ];

  this.strength = [
    ["Conventional Weights Training (1-5 repetitions per set)", 0], //0
    ["Conventional Weights Training (5+ repetitions per set)", 0], //1
    ["Crossfit baby!", 0], //2
    ["Olympic lifts (1-5 repetitions per set", 0], //3
    ["Olympic lifts (5+ repetitions per set", 0],  //4
  ];

  this.getSkinny = function() {
    this.cardio[0][1] = 10;
    this.cardio[1][1] = 10;
    this.cardio[2][1] = 5;
    this.cardio[3][1] = 5;
    this.cardio[4][1] = 6;
    this.cardio[5][1] = 8;
    this.cardio[6][1] = 8;
    this.cardio[7][1] = 7;
    this.cardio[8][1] = 8;
    this.cardio[9][1] = 4;
    this.strength[0][1] = 4;
    this.strength[1][1] = 4;
    this.strength[2][1] = 6;
    this.strength[3][1] = 4;
    this.strength[4][1] = 3;
    console.log(this.cardio);
    console.log(this.strength);
    console.log("working")
  };

  this.getBig = function(){
    this.cardio[0][1] = 6;
    this.cardio[1][1] = 6;
    this.cardio[2][1] = 4;
    this.cardio[3][1] = 3;
    this.cardio[4][1] = 2;
    this.cardio[5][1] = 2;
    this.cardio[6][1] = 6;
    this.cardio[7][1] = 5;
    this.cardio[8][1] = 4;
    this.cardio[9][1] = 2;
    this.strength[0][1] = 8;
    this.strength[1][1] = 10;
    this.strength[2][1] = 8;
    this.strength[3][1] = 8;
    this.strength[4][1] = 10;
    console.log(this.cardio);
    console.log(this.strength);
  };

  this.getStrong = function(){
    this.cardio[0][1] = 5;
    this.cardio[1][1] = 5;
    this.cardio[2][1] = 2;
    this.cardio[3][1] = 1;
    this.cardio[4][1] = 1;
    this.cardio[5][1] = 2;
    this.cardio[6][1] = 5;
    this.cardio[7][1] = 3;
    this.cardio[8][1] = 4;
    this.cardio[9][1] = 2;
    this.strength[0][1] = 10;
    this.strength[1][1] = 7;
    this.strength[2][1] = 8;
    this.strength[3][1] = 10;
    this.strength[4][1] = 8;
    console.log(this.cardio);
    console.log(this.strength);
  };
};
  var game = new Game();

$(document).ready(function(){
  $('#get-skinny').click(function() {game.getSkinny()});
  $('#get-big').click(function() {game.getBig()});
  $('#get-strong').click(function() {game.getStrong()});
})