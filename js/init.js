//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "26 sep 2022 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	