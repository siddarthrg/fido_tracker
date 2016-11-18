// Render home page and json data


exports.view = function(req, res){
	// Import json data
	var logData = require("../data/log.json");

	var newLog = {
		"id": logData.length + 1, // Ask how to index this

		"name": req.body.food,

		"dd": req.body.dd,
		"mm": req.body.mm,
		"year": req.body.yy,

		"cal": parseInt(req.body.cal),
		"mood": parseInt(req.body.mood),
		"info": req.body.info,
		"image": "public/images/food/oj.jpg",

		"ateGrains": parseInt(req.body.ateGrains),
 		"ateFruit": parseInt(req.body.ateFruit),
 		"ateVeggies": parseInt(req.body.ateVeggies),
 		"ateProtein": parseInt(req.body.ateProtein),
 		"ateDairy": parseInt(req.body.ateDairy)
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
