'use strict';

angular.module('porygonApp')
  .controller('MainCtrl', function ($scope, User) {

    //Initialization
    var currElement = "";

    //Get random user change '20' for desired number of users
    User.getRandomUser(20).then(function(users) {
      angular.forEach(users.data.results, function(data) {
        //inserting random role of each user.
        data.user.role = User.getRandomRole();
      });
      $scope.users = users.data.results;
    });

    //Drowdown list
    $scope.formation = ['4-4-2', '2-3-5'];

    //listener for changing of formation
    $scope.changeFormation = function(data) {
      console.log('todo');
    };

  });
