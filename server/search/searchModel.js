// server passes in the database connection in to the model
module.exports = function(db){
  return {

    getPosts: function(){
      // console.log("model getst: database connection passed in is: ", db);
      var collection = db.collection('qnaitems');
      // console.log("collection is: ", collection);
      return collection.find().toArray();
    }

  }
}
