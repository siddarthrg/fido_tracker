/*
 * GET VET page.
 */

// Import json
var userData = require("../data/user.json");
var logData = require("../data/log.json");

// Render home page and json data
exports.view = function(req, res){
  res.render('vet', { userData: userData });
};

// Get today's date
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0! That's why we're adding 1 to make Jan == 1
var year = today.getFullYear();

// Calculate average mood of pet based on today's data
var avgMood = 0; 
var count = 0;

// vars to check whether a food group has been eaten or not
var didEatGrains = 0;
var didEatFruit = 0;
var didEatDairy = 0;
var didEatProtein = 0;
var didEatVeggies = 0;


// ERROR: Not calculating last entry in json
for (var i=0; i<logData.length; i++){
	if (logData[i].mm == month){
		if(logData[i].dd == day){
			avgMood = avgMood + logData[i].mood;
			console.log(logData[i]);
			count ++
		}
	}	
}

// Default mood if no log available
if(count && count == 0){
	avgMood = 3;
}else{
	avgMood = avgMood / count;
}

// Check whether a food group has been eaten
for (var j=0; j<logData.length; j++){
	if(logData[i].ateGrains == 1) {
		didEatGrains = 1;
	}
	if(logData[i].ateProtein == 1) {
		didEatProtein = 1;
	}
	if(logData[i].ateFruit == 1) {
		didEatFruit = 1;
	}
	if(logData[i].ateDairy == 1) {
		didEatDairy = 1;
	}
	if(logData[i].ateVeggies == 1) {
		didEatVeggies = 1;
	}
}

// Calculate final value & console log average mood 
console.log('Average mood for today calculated!');
avgMood = Math.round(avgMood); // Rounding off to closest integer  
userData[0].mood = avgMood; 
console.log('Averge mood = ' + avgMood);

// Add food groups eaten to userData
userData[0].ateGrains = didEatGrains;
userData[0].ateProtein = didEatProtein;
userData[0].ateFruit = didEatFruit;
userData[0].ateDairy = didEatDairy;
userData[0].ateVeggies = didEatVeggies;



