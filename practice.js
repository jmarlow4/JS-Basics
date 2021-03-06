//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;
	}
}

//Next problem
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

  //Code Here
function getName(){
	return prompt("input yer name")
}

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
	alert("Welcome, " + getName());
}

//What is the difference between arguments and parameters?

  //Answer Here
function func(parameter){}
func("argument");

//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here
var allFalseyValues = [false, 0, "", undefined, null, NaN];
if ( !allFalseyValues[0] ) {
	console.log("false!");
}

//Create a function called myName that returns your name

  //Code Here
function myName() {
	return "Jason Marlow";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName
alert( newMyName() );

//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
	return function() {
		return "Jason Marlow";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();