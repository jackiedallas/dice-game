"use strict"

$('#roll').click(function (e) {
	e.preventDefault();
	
	// random numbers for dice roll
	let randomNumber1 = Math.floor(Math.random() * 6) + 1;
	let randomNumber2 = Math.floor(Math.random() * 6) + 1;
	
	// setting images to number rolled on click of roll button
	$('.img1').attr('src', `images/dice${randomNumber1}.png`);
	$('.img2').attr('src', `images/dice${randomNumber2}.png`);
	
	// if statement to change h1 element
	if (randomNumber1 > randomNumber2) {
		$('h1').html('Player 1 Wins!')
	} else if(randomNumber1 === randomNumber2) {
		$('h1').html('Tie! Roll Again')
	} else {
		$('h1').html('Player 2 Wins!')
	}
	
})




