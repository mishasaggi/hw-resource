console.log("in the home controller");
angular.module('app.home', [])
  
  .controller('HomeController', ["$scope", "$location", "UserSearch", function($scope, $location, UserSearch) {
    $scope.userInput = {} //searchtags
    $scope.userInputError = false;
    $scope.posts = [];

    $scope.getAllPosts = function(){
      UserSearch.getPosts()
      .then(function(results){
        console.log('results from getAll: ', results);
      })
    }

    $scope.searchNow = function() {

      //validation
      if( $scope.userInput.searchTags === undefined ) {
        $scope.userInputError = true;
      } else {
        $scope.userInputError = false;

        //call the service method to make a server call to fetch all posts
        console.log('In search now function');
        // UserSearch.getPosts($scope.userInput)
      }
    }

    $scope.getAllPosts();

  }])
