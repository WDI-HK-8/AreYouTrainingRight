$(document).ready(function(){

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

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+"%");
        }
    });
});
})
