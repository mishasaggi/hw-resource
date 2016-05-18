//route is passing in an interface to the specific db model
module.exports = function(searchQuery){
  return {

    getPosts: function(req, res){
      console.log('request: ', req.body);
      var userQuery = req.body.query;

      searchQuery.getPosts()
       .then(function(data){
        res.send(data);
      })

    }

  }
}
