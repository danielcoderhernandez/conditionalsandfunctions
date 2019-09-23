/*
*Conditionals, Functions, Scope, and Loops
 */

//Conditionals
//Equals
let equals = 1 === 1;
console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

//Functions
function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10,11);
compareStorePrices(10,9);

function squareNum (number) {
	let squared = number * number;
	return squared;
}

let squaredNumber = squareNum(12);
console.log(squaredNumber);

//Scope
