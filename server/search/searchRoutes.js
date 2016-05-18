// server passes in the router and db model interface
module.exports = function(app, searchQuery){

  var searchController = require('./searchController.js')(searchQuery);

  console.log("in the search router. query is: ", searchQuery, "and controller is: ", searchController);
  app.post('/getPosts', searchController.getPosts);
}
