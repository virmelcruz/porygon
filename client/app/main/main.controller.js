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

    $scope.dropTargetText = "Drag the small circle here.";
    
    $scope.draggableHint = function(e) {
      currElement = e;
      return $(e).clone();
    };

    $scope.onDragEnd = function(e) {
        var draggable = $(currElement);

        if (!draggable.data("kendoDraggable").dropped) {
            // drag ended outside of any droptarget
            $scope.dropTargetText = "Try again!";
        }

        draggable.removeClass("hollow");
    };

    $scope.onDragStart = function(e) {
      console.log(currElement);
      $scope.$apply(function() {
        $scope.draggableClass = "hollow";
        $scope.dropTargetText = "Drop here.";
      });
    };

    $scope.onDragEnter = function(e) {
      $scope.$apply(function() {
        $scope.dropTargetText = "Now drop...";
      });
    };

    $scope.onDragLeave = function(e) {
      $scope.$apply(function() {
        $scope.dropTargetText = "Drop here.";
      });
    };

    $scope.onDrop = function(e) {
      $scope.$apply(function() {
        $scope.dropTargetText = "You did great!";
        $scope.draggableClass = "";
      });
    };

  });
