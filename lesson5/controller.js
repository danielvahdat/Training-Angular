var myApp = angular.module('myApp', ["ui.router"])
 myApp.config(function($stateProvider, $urlRouterProvider){
     $stateProvider
        .state('route1', {
              url: "/route1",
              templateUrl: "route1.html",
             })
         .state('route2', {
              url: "/route2",
              templateUrl: "route2.html",
             })
          .state('route3', {
              url: "/route3",
              templateUrl: "route3.html",
             })
 });
