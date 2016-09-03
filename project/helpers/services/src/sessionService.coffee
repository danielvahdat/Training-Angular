angular.module('myApp').service 'sessionService', ->
  userIsAuthenticated = false

  @setUserAuthenticated = (value) ->
    userIsAuthenticated = value
    return

  @getUserAuthenticated = ->
    userIsAuthenticated

  return

