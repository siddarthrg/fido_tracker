/*
 * GET home page.
 */

 // Import json data files
var userData = require("../data/user.json");
var logData = require("../data/log.json");

// Render home page and json data
exports.view = function(req, res){
  res.render('home', userData);
};

// Get today's date
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0! That's why we're adding 1 to make Jan == 1
var year = today.getFullYear();

// Calculate average mood of pet based on today's data
var avgMood = 0; 
var count = 0;

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
userData[2].mood = avgMood; // Saving to user.json
console.log('Averge mood saved to user.json');
console.log('Averge mood = ' + avgMood)
