'use strict';

angular.module('porygonApp')
  .directive('dropTargetUser', function () {
    return {
      templateUrl: 'components/drop-target-user/drop-target-user.html',
      restrict: 'EA',
	    link: function (scope, element, attrs) {

	    	var previosUser = {};

      	//listener draggable enters the area
      	scope.onDragEnter = function(e) {
		      //get current position element
			    var playerPosition = angular.element(this.element);

			    playerPosition.addClass("enter");	

			    //incase wants to remove image when hoverring, uncomment it
			    // playerPosition.css({'background-image' : 'url()'});
		    };

		    //listener draggable leaves the area
		    scope.onDragLeave = function(e) {
		      //get current position element
			    var playerPosition = angular.element(this.element);
			    playerPosition.removeClass("enter");

			    /** incase wants to remove image when hoverring, uncomment it
			    //checks if position has background image
		      if(playerPosition.hasClass("active")) {

			    	//set position image to previous user
		    		setBgImage(playerPosition, e);
		      } **/
		    };

		    //listener draggable drops the area
		    scope.onDrop = function(e) {
		    	//get current position element
		    	var playerPosition = angular.element(this.element);

		    	//set styles
		    	playerPosition.removeClass("enter");
		    	playerPosition.addClass("active");
		    	
		    	//calls extract user
		    	previosUser = extractUser(e);
		    	
		    	//set position image to current user
		    	setBgImage(playerPosition, e);

		    };

		    //extracts user data on scope
		    var extractUser = function(e) {
		    	return angular.element(e.target).scope().userData;
		    };

		    //sets element image and name
		    var setBgImage = function(position, e) {
		    	var posName = position.next();
		    	var userData = extractUser(e);
		    	
		    	//sets user image to position element
		    	position.css({
		    		'background-image': 'url(' + userData.user.picture.thumbnail +')',
		    		'background-size' : 'cover'
		    	});

		    	//sets user name
		    	posName.text(userData.user.name.last);
		    	posName.css({'display' : 'block'})
		    };
      }
    };
  });