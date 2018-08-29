require('rootpath')();
const express = require('express');
//const MongoStore   = require('connect-mongo')(session);
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

var session      = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api user routes
app.use('/users', require('./users/users.controller'));

  // other routes
  var routes = require('./routes/router');
  app.use('/', routes);

// //use sessions for tracking logins
// app.use(session({
//     secret: 'wakanda forever',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: connection
//     })
//   }));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
