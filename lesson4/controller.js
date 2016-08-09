var myApp = angular.module('myApp', ["ui.router",'monospaced.elastic'])
 myApp.config(function($stateProvider, $urlRouterProvider){
     $stateProvider
        .state('route1', {
                url: "/route1",
              templateUrl: "route1.html",
             })
 });
myApp.controller("controller",function($scope){
 $scope.Name=function(){return $scope.name;}
 $scope.Pwd=function(){return $scope.pwd;}
 $scope.Int=function(){return $scope.inter;}
 $scope.RadioValue=function(){return $scope.radioValue;};
 $scope.Art=function(){return $scope.art};
 $scope.Sport=function(){return $scope.sport};
 $scope.Poem=function(){return $scope.poem};
 $scope.Music=function(){return $scope.music};
$scope.Nation=function(){return $scope.nation};
})
