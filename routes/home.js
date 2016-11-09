/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home');
};

var data = require("../data/user.json");


exports.dispUserData = function(req, res) {
	// Your code goes here

  console.log("Successfully imported user data");
}


 