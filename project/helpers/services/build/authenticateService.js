// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('myApp').factory('authenticateService', function($rootScope, sessionService, $location) {
    return {
      login: function(user) {
        sessionService.set(user);
      },
      logout: function() {
        sessionService.destroy();
      },
      isLogged: function() {
        if (sessionService.get()) {
          return true;
        } else {
          return false;
        }
      }
    };
  });

}).call(this);
