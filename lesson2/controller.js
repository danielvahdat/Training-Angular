var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.Name="";
      $scope.insertName = function()
{
return $scope.Name;
      }

});
