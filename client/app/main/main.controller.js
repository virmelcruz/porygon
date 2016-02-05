'use strict';

angular.module('porygonApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.panelBarDataSource = [
        {
          text: "First Team Squad",
          cssClass: "myClass",                            // Add custom CSS class to the item, optional, added 2012 Q3 SP1.
        },
        {
          text: "<b>Goal Keepers</b>",
          encoded: false,                                 // Allows use of HTML for item text
          content: "text"                                 // content within an item
        },
        {
          text: "Item 3",
          // content URL to load within an item
          contentUrl: "http://demos.telerik.com/kendo-ui/content/web/panelbar/ajax/ajaxContent1.html"
        },
        {
          text: "Item 4",
          // item image URL, optional
          imageUrl: "http://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png",
          expanded: true,                                 // item is rendered expanded
          items: [{                                       // Sub item collection.
            text: "Sub Item 1"
          },
                  {
                    text: "Sub Item 2"
                  }]
        },
        {
          text: "Item 5"
        }
    ];

  });
