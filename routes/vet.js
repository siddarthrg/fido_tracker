/*
 * GET vet page.
 */

// Import json
var userData = require("../data/user.json");
var logData = require("../data/log.json");

// Render home page and json data
exports.view = function(req, res){
  res.render('vet', { userData: userData });
};
