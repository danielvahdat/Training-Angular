// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('myApp').factory('sessionService', function($rootScope) {
    var currentUser;
    currentUser = void 0;
    return {
      set: function(user) {
        return currentUser = user;
      },
      get: function() {
        return currentUser;
      },
      destroy: function() {
        return currentUser = null;
      }
    };
  });

}).call(this);
