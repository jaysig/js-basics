//side effect is anything that's not returned from a function

//arguments will return all of the arguments in a function 
//Array.prototype.slice.call(arguments, 0);  - converts arguments into an array 

//Constructor
function AnimalMaker(name){
	return {
		speak: function(){
			console.log('my name is ' + name);
		}
	};
}

//Block Scope - Does not exist in JS