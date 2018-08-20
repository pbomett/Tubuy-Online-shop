import express from 'express';
import cors from 'cors';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var passport     = require('passport');
var flash        = require('connect-flash');
var session      = require('express-session');
var MongoStore   = require('connect-mongo')(session);

const app = express();
//const router = express.Router();

mongoose.connect('mongodb://localhost:27017/issues');
  
const connection = mongoose.connection;

 // pass passport for configuration
require('./passport');


//use sessions for tracking logins
app.use(session({
  secret: 'wakanda forever',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: connection
  })
}));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors());         //to allow external conncections
app.use(bodyParser.json()); //parse json

// required for passport
//app.use(session({ secret: 'wakandaforever' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

  // include routes
  //require('./routes/router')(app, passport); // load our routes and pass in our app and fully configured passport

  var routes = require('./routes/router');
  app.use('/', routes);

  // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

  
  
  connection.once('open', () => {
      console.log('MongoDB database connection established successfully!');
  });


app.listen(4000, () => console.log('Express server running on port 4000'));