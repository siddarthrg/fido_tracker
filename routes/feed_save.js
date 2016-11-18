// Render home page and json data


exports.view = function(req, res){
	// Import json data
	var logData = require("../data/log.json");

	// Set ateFoodGroup to numerical values
	var ateGrains;
	if(req.body.ateGrains == null){ateGrains = 0;}
	else ateGrains = 1; 

	var ateFruit;
	if(req.body.ateFruit == null){ateFruit = 0;}
	else ateFruit = 1; 

	var ateDairy;
	if(req.body.ateDairy == null){ateDairy = 0;}
	else ateDairy = 1; 

	var ateProtein;
	if(req.body.ateProtein == null){ateProtein = 0;}
	else ateProtein = 1; 

	var ateVeggies;
	if(req.body.ateVeggies == null){ateVeggies = 0;}
	else ateVeggies = 1; 
	
	// Creat new JSON and append to log
	var newLog = {
		"id": logData.length + 1, 

		"name": req.body.food,

		"dd": req.body.dd,
		"mm": req.body.mm,
		"year": req.body.yy,

		"cal": parseInt(req.body.cal),
		"mood": parseInt(req.body.mood),
		"info": req.body.info,
		"image": "public/images/food/oj.jpg",

		"ateGrains": ateGrains,
 		"ateFruit": ateFruit,
 		"ateVeggies": ateVeggies,
 		"ateProtein": ateProtein,
 		"ateDairy": ateDairy
	}

	logData.push(newLog);
	var newData = JSON.stringify(logData);
	
	var fs = require('fs');
	fs.writeFile("data/log.json",newData, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The new log was saved!");
	    res.redirect('/vet');
	});

};
