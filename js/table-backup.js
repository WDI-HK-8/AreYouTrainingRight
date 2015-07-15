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


var game = new Game();


$(document).ready(function(){
=======
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
>>>>>>> initial table function working

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
