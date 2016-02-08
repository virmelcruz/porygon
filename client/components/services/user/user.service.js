'use strict';

angular.module('porygonApp')
  .factory('User', function ($http) {
    
    //random user from https://randomuser.me
    var userURL = 'http://api.randomuser.me';

    // Public API here
    return {
      getRandomUser: function (count) {
        count = count ? count : 1;
        return $http.get(userURL, { params: { results: count }});
      },
      getRandomRole: function() {
        var roles = ['Goalkeeper', 'Defense', 'Midfielder', 'Forward'];
        return _.sample(roles);
      }
    };
  });
