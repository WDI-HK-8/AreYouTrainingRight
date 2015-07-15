<<<<<<< HEAD
var Game = function(){
	var score = 35 / 50 * 100;
	this.advice = function() {
		
		var html = '';

		if (score < 50) {
			html += " <h1>With the way you are training...why even bother!</h1>"
			html += "		<h3>To maximise your results, consider the following pro tips...</h3>"
			html += "			<p><b>GETTING BIGGER:</b> If your main goal is to put on size, focus on exercises that best stimulate Hypertrophy.</p>"
			html += "				<ul>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/hst1.htm' target='_blank'> Hypertrophy-Specific Training Program</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/you-only-bigger-5-principles-for-greater-hypertrophy.html' target='_blank'>5 Principles For Greater Hypertrophy</a></li>"
			html += "				</ul>"
			html += "			<p><b>GETTING LEANER:</b> Cardio is your friend! But if you don't want to lose muscle while you burn away the fat, consider incorporating HIIT training into your routine.</p>" 
			html += "				<ul>"
			html += "					<li><a href='http://www.shape.com/fitness/workouts/8-benefits-high-intensity-interval-training-hiit' target='_blank'> 8 Benefits of High-Intensity Interval Training (HIIT)</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/wotw40.htm' target='_blank'>What is the best HIIT workout?</a></li>"
			html += "				</ul>"
			html += "			<p><b>GETTING STRONGER:</b> If your goal is to deadlift 500 lbs then low amount of repitions of very heavy weights is the way for you!</p>" 
			html += "				<ul>"
			html += "					<li><a href='http://www.mensfitness.com/training/build-muscle/10-strength-building-strategies' target='_blank'>10 strength building strategies that never die</a></li>"
			html += "					<li><a href='http://stronglifts.com/5x5/' target='_blank'>5x5: The simplest way to get stronger</a></li>"
			html += "				</ul>"
	  }

		else if (score < 80) {
			html += " <h1>Pretty good, but theres room for improvement!</h1>"
			html += "		<h3>To maximise your results, consider the following pro tips...</h3>"
			html += "			<p><b>GETTING BIGGER:</b> If your main goal is to put on size, focus on exercises that best stimulate Hypertrophy.</p>"
			html += "				<ul>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/hst1.htm' target='_blank'> Hypertrophy-Specific Training Program</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/you-only-bigger-5-principles-for-greater-hypertrophy.html' target='_blank'>5 Principles For Greater Hypertrophy</a></li>"
			html += "				</ul>"
			html += "			<p><b>GETTING LEANER:</b> Cardio is your friend! But if you don't want to lose muscle while you burn away the fat, consider incorporating HIIT training into your routine.</p>" 
			html += "				<ul>"
			html += "					<li><a href='http://www.shape.com/fitness/workouts/8-benefits-high-intensity-interval-training-hiit' target='_blank'> 8 Benefits of High-Intensity Interval Training (HIIT)</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/wotw40.htm' target='_blank'>What is the best HIIT workout?</a></li>"
			html += "				</ul>"
			html += "			<p><b>GETTING STRONGER:</b> If your goal is to deadlift 500 lbs then low amount of repitions of very heavy weights is the way for you!</p>" 
			html += "				<ul>"
			html += "					<li><a href='http://www.mensfitness.com/training/build-muscle/10-strength-building-strategies' target='_blank'>10 strength building strategies that never die</a></li>"
			html += "					<li><a href='http://stronglifts.com/5x5/' target='_blank'>5x5: The simplest way to get stronger</a></li>"
			html += "				</ul>"

		}

		else if (score < 99){

			html += " <h1>Your training is on point! But what about your diet? </h1>"
			html += "		<p>In the gym, on the track or on the road you are a machine, a beast, a god amongst men. But what about in the kitchen? Understand how what goes in your mouth is effecting your results with these pro tips...</p>"
			html += "				<ul>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/bmr_calculator.htm' target='_blank'> Calculate your Basal Metobolic Rate</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/macro-math-3-keys-to-dialing-in-your-macro-ratios.html' target='_blank'>3 keys to dialing in your macronutrient ratios</a></li>"
			html += "					<li><a href='http://www.everydayhealth.com/weight/boost-weight-loss-by-knowing-your-bmr.aspx' target='_blank'>Using your BMR to lose weight</a></li>"
			html += "					<li><a href='http://www.mensfitness.com/nutrition/what-to-eat/top-10-muscle-building-foods' target='_blank'>Top 10 muscle building foods</a></li>"
			html += "				</ul>"
		}

		else if (score > 100){
			html += " <h1>SWEET JESUS HOW ARE YOU STILL ALIVE???</h1>"
			html += "		<h3>Recovery is just as important as training itself. Please please please read this article before it's too late!</h3>"
			html += "				<ul>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/dickinson18.htm' target='_blank'> Recovery 101</a></li>"
			html += "					<li><a href='http://www.bodybuilding.com/fun/berardi34.htm' target='_blank'>All about recovery!</a></li>"
			html += "				</ul>"
		}

		$('.tips').html(html);
	}	
}

=======
>>>>>>> e32f6a2f4c0078e9b96444c6c059ea788ba109f6
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
<<<<<<< HEAD
>>>>>>> Table now working
=======
>>>>>>> e32f6a2f4c0078e9b96444c6c059ea788ba109f6

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
<<<<<<< HEAD
  });
  
  //remove training event
  $(document).on('click', '.cancel',function(){
    $(this).parent().fadeOut('slow', function(){
      $(this).remove();
    });
    console.log(array);
  });


	$('.results-button').click(function() { game.advice() });

	//navigation buttons
	$(".about, .back-button").click(function(){         
		$("html, body").animate({             
			scrollTop: $("#goal").offset().top         
		}, 1000);     
	});


	$(".back-button2").click(function(){         
		$("html, body").animate({             
			scrollTop: $("#training").offset().top         
		}, 1000);     
	});

	$(".results-button").click(function(){         
		$("html, body").animate({             
			scrollTop: $("#results").offset().top         
		}, 1000);     
	});

	$("#bigger-button, #leaner-button, #stronger-button").click(function(){         
		$("html, body").animate({             
			scrollTop: $("#training").offset().top         
		}, 1000);     
	});


	//Percentage fuction
	$('.results-button').click(function() {
			var score = 35 / 50 * 100;
	    $('.count').prop('Counter',0).animate({
	        Counter: score
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $('.count').text(Math.ceil(now)+"%");
	        }
	    });
	})
})	
=======
  });
  
  //remove training event
  $(document).on('click', '.cancel',function(){
    $(this).parent().fadeOut('slow', function(){
      $(this).remove();
    });
    console.log(array);
  });
});

>>>>>>> e32f6a2f4c0078e9b96444c6c059ea788ba109f6
