function guessMyNum(){
	// var num1 = randomGen();
	var num1 = 5;
	console.log("Random num: " + num1);
	var myGuess = prompt("Guess a number 1-100!");
	var keepPlaying = "";
	var myAnswer = true;

	while(myAnswer)
	{
		if(num1 == myGuess)
		{
			keepPlaying = confirm("You've FINALLY won with " + num1 + "!\nKEEP PLAYING?");
			if(keepPlaying)
			{
				myAnswer = true;
				myGuess = prompt("Guess a number 1-100!");
			}
			else{
				myAnswer = false;
			}
		}
		else if(num1 > myGuess)
		{
			myGuess = prompt("Too low! Guess a number higher than " + myGuess);
		}
		else if(num1 < myGuess)
		{
			myGuess = prompt("Too high! Guess a number lower than " + myGuess);
		}
		else{
			myGuess = prompt("Whoops, you need to enter a number from 1-100, Bub");
		}
	}
}
function randomGen()
{
	return (Math.round(Math.random() * 100)).toString();
}

// guessMyNum();

$( document ).ready(function() {
 
	$('#button1').click(function(event) {
		guessMyNum();
		

	});


}); 

