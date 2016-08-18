var app=angular.module('myApp',["oc.lazyLoad",'ui.router',]);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( '/',{
      url:'/',
      templateUrl:'/Public/namePage',
      controller:'controller',
      requireAuth: false,
      resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'myApp',
          files: [
            "./ctrl/controller.js",
	    './ctrl/styleSheet.css'            
     ]
    })
   }]
  }
 });
}]);

