angular.module('myApp').controller('mainController',['$scope','$state','$location','authenticateService','sessionService',function($scope,$state,$location,authenticateService,sessionService){
  $scope.tabSelected=function(route){
    $state.go(route);
  };
}]);
