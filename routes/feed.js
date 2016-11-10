/*
 * GET feed page.
 */

// Import json data files
var logData = require("../data/log.json");

// Render home page and json data
exports.view = function(req, res){
  res.render('feed', logData);
};



