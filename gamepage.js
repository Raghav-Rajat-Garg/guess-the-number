// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById('guessField').value;
let guess = 1;
// count of attempts
if (x == y){
	alert('congratulations!!' + playername + 'you guessed right in ' + guess + 'guess');
	guess = 1;
}
else if(x > y){
	guess++;
	alert('oops sorry!! try a smaller number');
}
else{
	guess++;
	alert('oops sorry!! try a greater number');
}
// until hit
function playAgain(){
	y = Math.floor(Math.random() * 10 + 1);
}
  
// function for the number sent by the user