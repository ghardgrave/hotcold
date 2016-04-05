$(document).ready(function() {


	function randoCalco() {
		var xyz = Math.floor((Math.random() * 100) + 1);
		console.log(xyz);
		return xyz;
	}

	var retval = randoCalco();


	function resetGame() {
		retval = randoCalco();
		$('head').append('<link rel="stylesheet" type="text/css" href="styles/style.css">');
		$('head').append('<link rel="stylesheet" type="text/css" href="styles/reset.css">');
		$('#count').text('0');
		$('.guessBox').text('');
		$('#feedback').text('Make your Guess!');
	}



	$("#guessButton").click(function() {

		/* increase guess number count */

		function increaseCount() {

			var countNumber = $('#count').text();
			var parseCount = (parseInt(countNumber, 10));
			$('#count').text(parseCount + 1);
			console.log("parsecount is " + parseCount);
		}



		/* compare guess with actual umber*/

		var userGuess = document.getElementById("userGuess").value;
		var parsed = parseInt(userGuess, 10);



		var numAndCompDiff = function(x, y) {
			return Math.abs(x - y);
		}

		var diffTotal = numAndCompDiff(parsed, retval);

		function addGuess() {
			increaseCount();
			$("#guessList").append("<li>" + parsed + "</li>");
		}

		/* check user guess */

		if (parsed == retval) {
			$('#feedback').text("You got it!");
			increaseCount();

			setTimeout(function() {

				resetGame();
			}, 1100);
		} else if (parsed == 69 && retval != 69) {
			$('#feedback').text("nice (but wrong)");
			increaseCount();
		} else if (parsed > 100 || parsed < 0) {
			alert("Your number is invalid; try a number between 1 and 100");
		} else if (diffTotal < 10) {
			$('#feedback').text("Very hot!");
			addGuess();
		} else if (diffTotal < 20) {
			$('#feedback').text("Hot!");
			addGuess();
		} else if (diffTotal < 30) {
			$('#feedback').text("Warm...");
			addGuess();
		} else if (diffTotal < 50) {
			$('#feedback').text("Cold...");
			addGuess();
		} else if (diffTotal > 50) {
			$('#feedback').text("Ice Cold!!");
			addGuess();
		} else if ((parsed < 100) && (parsed > 0)) {
			addGuess();
		};
		$("#userGuess").val("");
		event.preventDefault();
	});

	$("a.new").click(function() {
		setTimeout(function() {

			resetGame();
		}, 200);

	});


	/*--- Display information modal box ---*/
	$(".what").click(function() {
		$(".overlay").fadeIn(700);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function() {
		$(".overlay").fadeOut(700);
	});



})