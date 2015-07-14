var Game = function(){
  //Define value of training element
  this.cardio = {
    "HIIT Training": 0, // 0
    "Sprint Training": 0, //1
    "Short Distance Running (<6km)": 0, //2
    "Middle Distance Running (6-12km)": 0,  //3
    "Long Distance Running (<12km)": 0, //4
    "Boxing/Kick Boxing": 0, //5
    "Swimming - sprints": 0, //6
    "Swimming - long distance": 0, //7
    "Cycling - sprints": 0, //8
    "Cycling - long distance": 0, //9
  };

  this.strength = {
    "Conventional Weights Training (1-5 repetitions per set)" : 0, //0
    "Conventional Weights Training (5+ repetitions per set)" : 0, //1
    "Crossfit baby!" : 0, //2
    "Olympic lifts (1-5 repetitions per set)" : 0, //3
    "Olympic lifts (5+ repetitions per set)" : 0,  //4
  };

  this.getSkinny = function() {
    this.cardio["HIIT Training"] = 10;
    this.cardio["Sprint Training"] = 10;
    this.cardio["Short Distance Running (<6km)"] = 5;
    this.cardio["Middle Distance Running (6-12km)"] = 5;
    this.cardio["Long Distance Running (<12km)"] = 6;
    this.cardio["Boxing/Kick Boxing"] = 8;
    this.cardio["Swimming - sprints"] = 8;
    this.cardio["Swimming - long distance"] = 7;
    this.cardio["Cycling - sprints"] = 8;
    this.cardio["Cycling - long distance"] = 4;
    this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 4;
    this.strength["Conventional Weights Training (5+ repetitions per set)"] = 3;
    this.strength["Crossfit baby!"] = 6;
    this.strength["Olympic lifts (1-5 repetitions per set)"] = 4;
    this.strength["Olympic lifts (5+ repetitions per set)"] = 3;
    console.log(this.cardio);
    console.log(this.strength);
  };

  this.getBig = function(){
    this.cardio["HIIT Training"] = 6;
    this.cardio["Sprint Training"] = 6;
    this.cardio["Short Distance Running (<6km)"] = 4;
    this.cardio["Middle Distance Running (6-12km)"] = 3;
    this.cardio["Long Distance Running (<12km)"] = 2;
    this.cardio["Boxing/Kick Boxing"] = 2;
    this.cardio["Swimming - sprints"] = 6;
    this.cardio["Swimming - long distance"] = 5;
    this.cardio["Cycling - sprints"] = 5;
    this.cardio["Cycling - long distance"] = 2;
    this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 8;
    this.strength["Conventional Weights Training (5+ repetitions per set)"] = 10;
    this.strength["Crossfit baby!"] = 8;
    this.strength["Olympic lifts (1-5 repetitions per set)"] = 8;
    this.strength["Olympic lifts (5+ repetitions per set)"] = 10;
    console.log(this.cardio);
    console.log(this.strength);
  };

  this.getStrong = function(){
    this.cardio["HIIT Training"] = 5;
    this.cardio["Sprint Training"] = 5;
    this.cardio["Short Distance Running (<6km)"] = 2;
    this.cardio["Middle Distance Running (6-12km)"] = 1;
    this.cardio["Long Distance Running (<12km)"] = 1;
    this.cardio["Boxing/Kick Boxing"] = 2;
    this.cardio["Swimming - sprints"] = 5;
    this.cardio["Swimming - long distance"] = 3;
    this.cardio["Cycling - sprints"] = 4;
    this.cardio["Cycling - long distance"] = 2;
    this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 10;
    this.strength["Conventional Weights Training (5+ repetitions per set)"] = 7;
    this.strength["Crossfit baby!"] = 8;
    this.strength["Olympic lifts (1-5 repetitions per set)"] = 10;
    this.strength["Olympic lifts (5+ repetitions per set)"] = 8;
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
