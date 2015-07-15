function Game() {
  this.cardio_labels = {
    hiit         : "HIIT Training",
    run_sprint   : "Sprint Training",
    run_short    : "Short Distance Running (<6km)",
    run_mid      : "Middle Distance Running (6-12km)",
    run_long     : "Long Distance Running (<12km)",
    contact      : "Boxing/Kick Boxing",
    swim_sprint  : "Swimming - sprints",
    swim_long    : "Swimming - long distance",
    cycle_sprint : "Cycling - sprints",
    cycle_long   : "Cycling - long distance"
  };

  //Define value of training element
  this.cardio = {
    hiit         : 0,
    run_sprint   : 0,
    run_short    : 0,
    run_mid      : 0,
    run_long     : 0,
    contact      : 0,
    swim_sprint  : 0,
    swim_long    : 0,
    cycle_sprint : 0,
    cycle_long   : 0,
  };

  this.strength_labels = {
    weights_lowrep  : "Conventional Weights Training (1-5 repetitions per set)",
    weights_highrep : "Conventional Weights Training (5+ repetitions per set)",
    crossfit        : "Crossfit baby!",
    olympic_lowrep  : "Olympic lifts (1-5 repetitions per set)",
    olympic_highrep : "Olympic lifts (5+ repetitions per set)"
  };

  this.strength = {
    weights_lowrep  : 0,
    weights_highrep : 0,
    crossfit        : 0,
    olympic_lowrep  : 0,
    olympic_highrep : 0
  };
}

Game.prototype.getSkinny = function() {
  this.cardio.hiit         = 10;
  this.cardio.run_sprint   = 10;
  this.cardio.run_short    = 5;
  this.cardio.run_mid      = 5;
  this.cardio.run_long     = 6;
  this.cardio.contact      = 8;
  this.cardio.swim_sprint  = 8;
  this.cardio.swim_long    = 7;
  this.cardio.cycle_sprint = 8;
  this.cardio.cycle_long   = 4;

  this.strength.weights_lowrep   = 4;
  this.strength.weights_highrep  = 3;
  this.strength.crossfit         = 6;
  this.strength.olympic_lowrep   = 4;
  this.strength.olympic_highrep  = 3;

  console.log(this.cardio);
  console.log(this.strength);
};

Game.prototype.getBig = function() {
  this.cardio.hiit         = 6;
  this.cardio.run_sprint   = 6;
  this.cardio.run_short    = 4;
  this.cardio.run_mid      = 3;
  this.cardio.run_long     = 2;
  this.cardio.contact      = 2;
  this.cardio.swim_sprint  = 6;
  this.cardio.swim_long    = 5;
  this.cardio.cycle_sprint = 5;
  this.cardio.cycle_long   = 2;

  this.strength.weights_lowrep   = 8;
  this.strength.weights_highrep  = 10;
  this.strength.crossfit         = 8;
  this.strength.olympic_lowrep   = 8;
  this.strength.olympic_highrep  = 10;

  console.log(this.cardio);
  console.log(this.strength);
};

Game.prototype.getStrong = function() {
  this.cardio.hiit         = 5;
  this.cardio.run_sprint   = 5;
  this.cardio.run_short    = 2;
  this.cardio.run_mid      = 1;
  this.cardio.run_long     = 1;
  this.cardio.contact      = 2;
  this.cardio.swim_sprint  = 5;
  this.cardio.swim_long    = 3;
  this.cardio.cycle_sprint = 4;
  this.cardio.cycle_long   = 2;

  this.strength.weights_lowrep   = 10;
  this.strength.weights_highrep  = 7;
  this.strength.crossfit         = 8;
  this.strength.olympic_lowrep   = 10;
  this.strength.olympic_highrep  = 8;

  console.log(this.cardio);
  console.log(this.strength);
};

//cascading list
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  var optionArray = [];
  s2.innerHTML = "";

  switch (s1.value) {
    case "cardioList":
      optionArray = game.cardio_labels;
      break;

    case "strengthList":
      optionArray = game.strength_labels;
      break;
  }

  for (option in optionArray) {
    var newOption = document.createElement("option");
    newOption.innerHTML = optionArray[option];
    s2.options.add(newOption);
  }
};

var game = new Game();

$(document).ready(function(){

  //change value of Hash
  $('#get-skinny').click(function() { game.getSkinny() });
  $('#get-big').click(   function() { game.getBig()    });
  $('#get-strong').click(function() { game.getStrong() });

  //create new training event
  $('#addButton').click(function() {
    
    var style = $('#selectOne').val();
    var method = $('#selectTwo').val();
    var html ='';

    html += '<div class="row">'
    html += ' <div class="training-method col-xs-3">'+ method + '</div>'
    html += ' <button class="cancel">Cancel</button>'
    html += '</div>'


    console.log(style)
    console.log(method)

    $('.options').last().append(html);
    // var html = '';

    // html += '<div class="row">';
    // html += '  <select id="selectOne" class="trainingRow" name="selectOne" onchange="populate(this.id, \"selectTwo\")"';
    // html += '    <option value="">             What type of training do you do? </option>';
    // html += '    <option value="cardioList">   Cardiovascular Training          </option>';
    // html += '    <option value="strengthList"> Strength Training                </option>';
    // html += '  </select>';

    // html += '  <select id="selectTwo" class="trainingRow" name="selectTwo"';
    // html += '    <option value=""> Which method are you using? </option>';
    // html += '  </select>';
    // html += '</div>';

 
  });

})
