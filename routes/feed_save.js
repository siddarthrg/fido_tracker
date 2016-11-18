// Render home page and json data
exports.view = function(req, res){
	// Import json data
	var logData = require("../data/log.json");
	

	
	var newLog = {
		"id": logData.length + 1, // Ask how to index this

		"name": req.body.food,

		"dd": parseint(req.body.dd),
		"mm": parseint(req.body.mm),
		"year": parseint(req.body.yy),

		"cal": parseint(req.body.cal),
		"mood": parseint(req.body.mood),
		"info": parseint(req.body.info),
		"image": "public/images/food/oj.jpg",

		"ateGrains": parseint(req.body.ateGrains),
 		"ateFruit": parseint(req.body.ateFruit),
 		"ateVeggies": parseint(req.body.ateVeggies),
 		"ateProtein": parseint(req.body.ateProtein),
 		"ateDairy": parseint(req.body.ateDairy)
	}

	logData.push(newLog);
	var newData = JSON.stringify(logData);
	
	var fs = require('fs');
	fs.writeFile("data/test.json",newData, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The new log was saved!");
	    res.redirect('/vet');
	});

};
