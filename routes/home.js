/*
 * GET home page.
 */

 // Import json data files
var userData = require("../data/user.json");
var logData = require("../data/log.json");

// Render home page and import json data
exports.view = function(req, res){
  res.render('home', userData);
};

var avgMood = 3; // Set default mood of pet

// Get today's date
var day = today.getDate();
var month = today.getMonth()+1; //January is 0! That's why we're adding 1 to make Jan == 1
var year = today.getFullYear();

// Calculate average mood of pet based on today's data
for (var i=0; i<logData.length; i++){
	if (logData.[i].mm == month){
		if(logData.[i].dd == day){
		avgMood = avgMood + logData.[i].mood;
		}
	}	
}
console.log('Average mood for today calculated!');
avgMood = round(avgMood); // Rounding off to closest integer  
userData.[2].mood = avgMood; // Saving to user.json
console.log('Averge mood saved to user.json');
console.log('Averge mood = ' + )