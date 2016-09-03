angular.module('myApp').controller 'homeController', ($scope, $stateParams, authenticateService, $location) ->
  email == $stateParams.email
  $scope.superadminShow = true
  if email == 'admin'
    $scope.superadminShow = false
  return

