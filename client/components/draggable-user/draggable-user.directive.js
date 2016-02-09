'use strict';

angular.module('porygonApp')
  .directive('draggableUser', function () {
    return {
      templateUrl: 'components/draggable-user/draggable-user.html',
      restrict: 'EA',
      scope: {
      	users: "=",
      	role: "@"
      },
      link: function (scope, element, attrs) {

	      //Initialization
	    	var cloneElem = {};

	    	//clonning the target element
		    scope.draggableHint = function(e) {
		      cloneElem = angular.element(e).clone();
		      return cloneElem;
		    };


		    //listener for stop drag event
		    scope.onDragEnd = function(e) {
		    	if (!cloneElem.data("kendoDraggable").dropped) {
            // drag ended outside of any droptarget
            
          } else {
          	console.log("dropped");
          }
		    	//removes draggable style on clone element
		    	cloneElem.find(".player-container").remove("active");
		    };

		    //listener for start drag event
		    scope.onDragStart = function(e) {
		    	//for getting the targeted element
		    	var playerContainer = cloneElem.find(".player-container");

		    	//for adding draggable style
		    	playerContainer.addClass("active");

		    	//for display name on clone element
		    	playerContainer.children().addClass("active");
		    };

		    //to filter ng-repeat with user role
		    scope.getRole = function() {
		    	var filterByRole = {
		    		user: {}
		    	};
		    	filterByRole.user.role = scope.role;
		    	return filterByRole;
		    }

      }
    };
  });