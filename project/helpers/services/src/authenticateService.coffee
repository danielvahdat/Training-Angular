angular.module('myApp').factory 'authenticateService', ($rootScope, sessionService, $location) ->
  {
    login: (user) ->
      sessionService.set user
      # $location.path('home');
      return
    logout: ->
      sessionService.destroy()
      # $location.path('home');
      return
    isLogged: ->
      if sessionService.get()
        true
      else
        false

  }
