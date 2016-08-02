var app=angular.module("myApp",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/PageA");
	$stateProvider
  .state('PageA',{
	  url: "/PageA",
		templateUrl : "PageA.html",
		controller: "controller"
	})
	.state('PageB',{
    url: "/PageB/:myParentText",
    templateUrl : "/PageB.html",
    controller : function($scope, $stateParams){$scope.show = $stateParams.myParentText;}})
});
app.controller("controller",function($scope,$state){
  $scope.addText=function(){
	  if($scope.myText==undefined || $scope.myText=='')
		  {alert("please write in box");}
		else
		  $state.go('PageB',{myParentText:$scope.myText});}
});






