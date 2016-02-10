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
		    	//get element for checking if dropped
		    	var draggUser = angular.element(e);
		    	var userData = angular.element(this.element).scope().userData;;
		    	var _this = this;

		    	scope.$apply(function() {
			    	if (_this.dropped) {
			    		userData.user.added = true;
	          } else {
			    		userData.user.added = false;
	          }
          });

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