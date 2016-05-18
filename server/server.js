var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var dbConfig = require('./dbConfig.js');
var secret = dbConfig.secret;

var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
//parse json urls
app.use(bodyParser.json());
//logs http requests to console
app.use(morgan('dev'));

//serve static files

//unprotected routes
app.use(express.static(__dirname + '/../client')); // !! might need to change for protected routes
app.use('/node_modules', express.static(__dirname + '/../node_modules'))

//Model and Route variables, assigned after database connection is established
var searchQuery,
    searchRouter,
    usersQuery,
    usersRouter;

//---DATABASE---

dbConfig.getDB().then( function(db){

  //----ROUTING----
  //routing is moved inside of then so that we wait for the database connection
  //before requiring files.

  //pass database connection to each model
  searchQuery = require('./search/searchModel.js')(db);
  // usersQuery = require('./users/usersModel.js')(db);

  //api routing
  searchRouter = express.Router();
  // usersRouter = express.Router();

  //allocate router for type of request by component
  app.use('/api/search', searchRouter);
  // app.use('/api/users', usersRouter);

  //inject routers and db model interface in the files
  require('./search/searchRoutes.js')(searchRouter, searchQuery);
  // require('./users/usersRoutes.js')(usersRouter, usersQuery);

  console.error('all methods: ', searchRouter, searchQuery, searchModel);

})


app.listen(port);
