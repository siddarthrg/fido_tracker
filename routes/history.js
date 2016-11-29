/*
 * GET history page.
 */

// Import json
var userData = require("../data/user.json");
var logData = require("../data/log.json");

// Render home page and json data
exports.view = function(req, res){
  res.render('history', { userData: userData });
};

// Get today's date
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0! That's why we're adding 1 to make Jan == 1
var year = today.getFullYear();

// Calculate average mood of pet based on today's data
var avgMood = 0; 
var count = 0;

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

// Calculate final value & console log average mood 
console.log('Average mood for today calculated!');
avgMood = Math.round(avgMood); // Rounding off to closest integer  
userData[0].mood = avgMood; 
console.log('Averge mood = ' + avgMood)
 