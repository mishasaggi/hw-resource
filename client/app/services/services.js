angular.module('app.services', [])

  .factory('UserSearch', ["$http", function($http){

    //function handles all results as well as a search
    var getPosts = function(query){
      query = query || {};
      return $http.post('/api/search/getPosts', {query: query}).then(function(response){
        return { results: response }
      })
    }

    return {
      getPosts: getPosts
    }

  }])
