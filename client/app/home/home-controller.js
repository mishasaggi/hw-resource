console.log("in the home controller");
angular.module('app.home', [])
  
  .controller('HomeController', ["$scope", "$location", function($scope, $location) {
    $scope.userInput = {} //searchtags 
    $scope.userInputError = false;
    $scope.posts = [];


    $scope.searchNow = function(){

      //validation
      if( $scope.userInput.searchTags === undefined ) {
        $scope.userInputError = true;
      } else {
        $scope.userInputError = false;

        //call the service method to make a server call to fetch all posts
        console.log('In search now function');
      }
    }


  }])



