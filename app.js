
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var home = require('./routes/home');
//var homes = require('./routes/homes');
var feed = require('./routes/feed');
var feed_save = require('./routes/feed_save');
var vet = require('./routes/vet');
var vetp = require('./routes/vetp');
var profile = require('./routes/profile');
var shop = require('./routes/shop');
var history = require('./routes/history');

var login = require('./routes/login');
var logout_landing = require('./routes/logout_landing');
var signup = require('./routes/signup');
var pet_choice = require('./routes/pet_choice');
var pet_name = require('./routes/pet_name');
var settings = require('./routes/settings');

//var project = require('./routes/project');
// Example route
// var user = require('./routes/user');

// // Define json data as global variables
// var userData = require("./data/user.json");
// var logData = require("./data/log.json");


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', home.view);
app.get('/home', home.view);
//app.get('/homes', homes.view);
app.get('/feed', feed.view);
app.get('/vet', vet.view);
app.get('/vetp', vetp.view);
app.get('/profile',profile.view);
app.get('/shop',shop.view);
app.get('/history',history.view);

app.get('/login',login.view);
app.get('/logout',logout_landing.view);
app.get('/signup',signup.view);
app.get('/choosepet',pet_choice.view);
app.get('/namepet',pet_name.view);
app.get('/settings',settings.view);

app.post('/feed_save', feed_save.view);

//app.get('/project/:id', project.projectInfo);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
