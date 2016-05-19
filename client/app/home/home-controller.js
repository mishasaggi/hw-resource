console.log("in the home controller");
angular.module('app.home', [])
  
  .controller('HomeController', ["$scope", "$location", "UserSearch", function($scope, $location, UserSearch) {
    $scope.userInput = {} //searchtags
    $scope.userInputError = false;
    $scope.posts = {
      items : [ 'placeholder']
    };

    // //user data structure, put into mongo after admin / edit piece is
    $scope.posts.users = {
        longhorn: 'ruminating over javascript',
        llama: 'making art from css',
        'dumbo octopus': 'pranking people with computer programs',
        'snowy owl': "creating magic (oh wait, it's just code)",
        squirrel: 'collecting weird (awesome!) programs',
        orangutan: 'learning web programming'
    };

    $scope.posts.images = {
        longhorn: '../../images/longhorn.jpg',
        llama: '../../images/llama.jpg',
        'dumbo octopus': '../../images/dumbo octopus.jpg',
        'snowy owl': '../../images/snowy owl.jpg',
        squirrel: '../../images/squirrel.jpg',
        orangutan: '../../images/orangutan.jpg'
    };

    $scope.getAllPosts = function(){
      UserSearch.getPosts()
      .then(function(results){
        console.log('results from getAll: ', results.results);
        $scope.posts.items = results.results.data;
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
