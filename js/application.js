//Global Variables  
var array = [];
var cardio = {
  "HIIT Training":                      0,
  "Sprint Training":                    0,
  "Short Distance Running (<6km)":      0,
  "Middle Distance Running (6-12km)":   0,
  "Long Distance Running (<12km)":      0,
  "Boxing/Kick Boxing":                 0,
  "Swimming - sprints":                 0,
  "Swimming - long distance":           0,
  "Cycling - sprints":                  0,    
  "Cycling - long distance":            0,
};

var strength = {
  "Conventional Weights Training (1-5 repetitions per set)":  0,
  "Conventional Weights Training (5+ repetitions per set)":   0,
  "Crossfit baby!":                                           0,
  "Olympic lifts (1-5 repetitions per set)":                  0,
  "Olympic lifts (5+ repetitions per set)":                   0,
};

var getSkinny = function() {
  this.cardio["HIIT Training"]                              = 10;
  this.cardio["Sprint Training"]                            = 10;
  this.cardio["Short Distance Running (<6km)"]              = 5;
  this.cardio["Middle Distance Running (6-12km)"]           = 5;
  this.cardio["Long Distance Running (<12km)"]              = 6;
  this.cardio["Boxing/Kick Boxing"]                         = 8;
  this.cardio["Swimming - sprints"]                         = 8;
  this.cardio["Swimming - long distance"]                   = 7;
  this.cardio["Cycling - sprints"]                          = 8;
  this.cardio["Cycling - long distance"]                    = 4;
  this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 4;
  this.strength["Conventional Weights Training (5+ repetitions per set)"]  = 3;
  this.strength["Crossfit baby!"]                           = 6;
  this.strength["Olympic lifts (1-5 repetitions per set)"]  = 4;
  this.strength["Olympic lifts (5+ repetitions per set)"]   = 3;
  console.log(this.cardio);
  console.log(this.strength);
};

var getBig = function() {
  this.cardio["HIIT Training"]                              = 6;
  this.cardio["Sprint Training"]                            = 6;
  this.cardio["Short Distance Running (<6km)"]              = 4;
  this.cardio["Middle Distance Running (6-12km)"]           = 3;
  this.cardio["Long Distance Running (<12km)"]              = 2;
  this.cardio["Boxing/Kick Boxing"]                         = 2;
  this.cardio["Swimming - sprints"]                         = 6;
  this.cardio["Swimming - long distance"]                   = 5;
  this.cardio["Cycling - sprints"]                          = 5;
  this.cardio["Cycling - long distance"]                    = 2;
  this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 8;
  this.strength["Conventional Weights Training (5+ repetitions per set)"]  = 10;
  this.strength["Crossfit baby!"]                           = 8;
  this.strength["Olympic lifts (1-5 repetitions per set)"]  = 8;
  this.strength["Olympic lifts (5+ repetitions per set)"]   = 10;
  console.log(this.cardio);
  console.log(this.strength);
};

var getStrong = function() {
  this.cardio["HIIT Training"]                              = 5;
  this.cardio["Sprint Training"]                            = 5;
  this.cardio["Short Distance Running (<6km)"]              = 2;
  this.cardio["Middle Distance Running (6-12km)"]           = 1;
  this.cardio["Long Distance Running (<12km)"]              = 1;
  this.cardio["Boxing/Kick Boxing"]                         = 2;
  this.cardio["Swimming - sprints"]                         = 5;
  this.cardio["Swimming - long distance"]                   = 3;
  this.cardio["Cycling - sprints"]                          = 4;
  this.cardio["Cycling - long distance"]                    = 2;
  this.strength["Conventional Weights Training (1-5 repetitions per set)"] = 10;
  this.strength["Conventional Weights Training (5+ repetitions per set)"]  = 7;
  this.strength["Crossfit baby!"]                           = 8;
  this.strength["Olympic lifts (1-5 repetitions per set)"]  = 10;
  this.strength["Olympic lifts (5+ repetitions per set)"]   = 8;
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
      optionArray = Object.keys(cardio);
      break;

    case "strengthList":
      optionArray = Object.keys(strength);
      break;
  }

  for (option in optionArray) {
    var newOption = document.createElement("option");
    newOption.innerHTML = optionArray[option];
    s2.options.add(newOption);
  }
};

$(document).ready(function(){
  //change value of Hash
  $('#get-skinny').click(function() { getSkinny() });
  $('#get-big').click(   function() { getBig()    });
  $('#get-strong').click(function() { getStrong() });

  //create new training event
  $('#addButton').click(function() {
    var style = $('#selectOne').val();
    var method = $('#selectTwo').val();
    var html ='';
    
    html += '<div class="row">';
    html += ' <div class="training-method col-xs-3">'+ method + '</div>';
    html += ' <button class="cancel">Remove training event</button>';
    html += '</div>';

    
    $('.options').last().append(html);
    
    if (style == "cardioList"){
      array.push(cardio[method]);
    };
    else if (style == "strengthList") {
      array.push(strength[method]);
    };
     
    console.log(array);

    var score = 0;
      for (i=0; i<array.length; i++) {
      score +=array[i];
      };
      console.log(score);
  });
  
  //remove training event
  $(document).on('click', '.cancel',function(){
    $(this).parent().fadeOut('slow', function(){
      $(this).remove();
    });
    console.log(array);
  });
});

