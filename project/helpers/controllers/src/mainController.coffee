angular.module('myApp').controller 'mainController', [
  '$scope'
  '$state'
  '$location'
  'authenticateService'
  'sessionService'
  ($scope, $state, $location, authenticateService, sessionService) ->

    $scope.tabSelected = (route) ->
      $state.go route
      return

    return
]
