 function randomRange(min,max){
 	console.log("Heres where I want to calculate the random range.")
 	if(typeof min == 'number' && typeof max == 'number')
 	{
 		return Math.round(Math.random()*(max-min)+min);
 	}
 	else if(min >= max)
 	{
 		throw "Whoops! Max must be >= Min value"
 	}
 	else
 	{
 		throw "Whoops! " + min + " or " + max + " is not a number.";
 	}
 }
var myMinVal = prompt("What is your min range for your random numbers?");
var myMaxVal = prompt("What is your max range for your random numbers?");
var rando = randomRange(myMinVal, myMaxVal);
console.log("Random Num " +min + "-" + max + ": " + rando);