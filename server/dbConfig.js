var MongoClient = require('mongodb').MongoClient;
var Q = require('q');
var url = 'mongodb://localhost:27017/hellow';
// var url = 'mongodb://heroku_cqxdn19r:4aduumef8bejgie4qsh7e1gumc@ds045011.mlab.com:45011/heroku_cqxdn19r';
var dbPromise = null;

module.exports.secret = 'averysecretsecret';

module.exports.getDB = function getDB(){

  if(dbPromise === null){
    //connection pool is either created or in the process
    var defer = Q.defer();
    //initialize conection
    MongoClient.connect(url, function(err, database){

      if(err){
        console.error(err);
        defer.reject(err);
      } else if(err === null){
        console.log("Correctly connected to the db");
        defer.resolve(database);
      }
    })
    return dbPromise = defer.promise;
  } else {
    return dbPromise;
  }

}
