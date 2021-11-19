"use strict"

let randomNumber1 = Math.floor(Math.random() * 7) + 1;
// console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random() * 7) + 1;

$(window).on('load',function () {
	$('.img1').attr('src', `images/dice${randomNumber1}.png`);
	$('.img2').attr('src', `images/dice${randomNumber2}.png`);
	console.log(randomNumber1)
	console.log(randomNumber2)
})

if (randomNumber1 > randomNumber2) {
	$('h1').html('Player 1 Wins!')
} else if(randomNumber1 === randomNumber2) {
	$('h1').html('Roll Again')
} else {
	$('h1').html('Player 2 Wins!')
}

