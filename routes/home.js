/*
 * GET home page.
 */
var data = require("../data/user.json");


exports.view = function(req, res){
  res.render('home', data);
};






 