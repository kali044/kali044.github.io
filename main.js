var clock;		
		$(document).ready(function() {
			var clock;

			$(document).ready(function() {

				// Grab the current date
				var currentDate = new Date();

				// Set some date in the past. In this case, it's always been since Jan 1
				var pastDate  = new Date('July 2, 2019 00:00:00');
                console.log(pastDate.getTime())
				// Calculate the difference in seconds between the future and current date
				var diff = pastDate.getTime() / 1000 - currentDate.getTime() / 1000;

				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter',
					countdown:true
				});
			});

		});