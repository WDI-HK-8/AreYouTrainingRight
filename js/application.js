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
    
  //cascading list
  this.populate = function(s1,s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var optionArray = [];
    s2.innerHTML = "";

    if (s1.value == "cardioList") {
      
      optionArray = [
        Object.keys(this.cardio)[0],
        Object.keys(this.cardio)[1],
        Object.keys(this.cardio)[2],
        Object.keys(this.cardio)[3],
        Object.keys(this.cardio)[4],
        Object.keys(this.cardio)[5],
        Object.keys(this.cardio)[6],
        Object.keys(this.cardio)[7],
        Object.keys(this.cardio)[8],
        Object.keys(this.cardio)[9]
      ];
    }

    else if(s1.value =="strengthList") {
      optionArray = [
        Object.keys(this.strength)[0],
        Object.keys(this.strength)[1],
        Object.keys(this.strength)[2],
        Object.keys(this.strength)[3],
        Object.keys(this.strength)[4]
      ]; 
    }

    for (var option in optionArray) {
      var newOption = document.createElement ("option");
      newOption.innerHTML = optionArray[option];
      s2.options.add(newOption);
    }
 	};

  //create new line
  this.newLine = function() {
    var html = '';

    html += "<div class=\"row\">";
    html += "  <select id=\"selectOne\" class=\"trainingRow\" name=\"selectOne\" onchange=\"game.populate(this.id,\"selectTwo\")\">"
    html += "   <option value=\"\">What type of training do you do?</option>";
    html += "    <option value=\"cardioList\">Cardiovascular Training</option>";
    html += "    <option value=\"strengthList\">Strength Training</option>";
    html += "  </select>";
    html += "  <select id=\"selectTwo\" class=\"trainingRow\" name=\"selectTwo\"";
    html += "    <option value=\"\">Which method are you using?</option>";
    html += "  </select>";
    html += "</div>";

    $('.row').last().append(html);

  };
};
  
var game = new Game();

$(document).ready(function(){
  //change value of Hash
  $('#get-skinny').click(function() {game.getSkinny()});
  $('#get-big').click(function() {game.getBig()});
  $('#get-strong').click(function() {game.getStrong()});

  //create new training event
  $('#createButton').click(function() { game.newLine() });
})
