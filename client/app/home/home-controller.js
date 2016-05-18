console.log("in the home controller");
angular.module('app.home', [])
  
  .controller('HomeController', ["$scope", "$location", "UserSearch", function($scope, $location, UserSearch) {
    $scope.userInput = {} //searchtags
    $scope.userInputError = false;
    $scope.items = [];

    $scope.getAllPosts = function(){
      UserSearch.getPosts()
      .then(function(results){
        console.log('results from getAll: ', results.results.data[0].answers[0]);
        $scope.items = results.results.data;
        $scope.items[0].answers[0].text = "testing answer. It will be a paragraph and needs formatting";
        $scope.items[0].answers[0].user = "monkey";
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
