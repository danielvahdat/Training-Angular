angular.module('myApp').controller 'loginController', ($scope, $state, $location, authenticateService, sessionService) ->

  $scope.login = ->
    if $scope.emailModel == 'admin' and $scope.passModel == 'password'
      authenticateService.login $scope.emailModel
      $state.go 'home', email: $scope.emailModel
    else if $scope.emailModel == 'superadmin' and $scope.passModel == 'password'
      authenticateService.login $scope.emailModel
      $state.go 'home', email: $scope.emailModel
    else
      alert 'email or password is not correct'
    return

  return

