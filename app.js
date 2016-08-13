$(document).ready(function() {
	$('.play').on('click', function() {
		var inputValue = $('.text-input').val();
		inputValue = parseInt(inputValue, 10);

		if (inputValue % 1 === 0 && inputValue >= 1 && inputValue <= 1000) {
			fizzbuzz(inputValue);
		} else {
			alert("You must enter a number between 1 and 1000");
			$('.text-input').val("")
		}
	});
	$('.clear').on('click', function(){
		$('#text').empty();
		$('.text-input').val("");
	});
});

function fizzbuzz(max) {
	for ( var i = 1; i <= max; i++ ) {
		console.log(i);
		if ( i % 15 == 0 ) {
			console.log("fizz buzz");
			$("#text").append("fizz buzz");
			$("#text").append("<br/>");
		}
		else if ( i % 3 == 0 ) {
			console.log("fizz");
			$("#text").append("fizz");
			$("#text").append("<br/>");
		}
		else if ( i % 5 == 0 ) {
			console.log("buzz");
			$("#text").append("buzz");
			$("#text").append("<br/>");
		} else {
			console.log(i);
			$("#text").append(i);
			$("#text").append("<br/>");
		}
	}
};