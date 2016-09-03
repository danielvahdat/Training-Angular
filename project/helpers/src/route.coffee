 app.config [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  ($stateProvider, $urlRouterProvider, $locationProvider) ->
    $urlRouterProvider.otherwise '/'
    $stateProvider.state('login',
      url: '/login'
      templateUrl: '/views/login'
      controller: 'loginController'
      requireAuth: false
      resolve: deps: [
        '$ocLazyLoad'
        ($ocLazyLoad) ->
          $ocLazyLoad.load
            name: 'myApp'
            files: [
              'helpers/controllers/build/loginController.js'
              'helpers/styles/login.css'
            ]
      ]).state('main',
      url: '/'
      templateUrl: '/views/main'
      controller: 'mainController'
      requireAuth: false
      resolve: deps: [
        '$ocLazyLoad'
        ($ocLazyLoad) ->
          $ocLazyLoad.load
            name: 'myApp'
            files: [
              'helpers/controllers/build/mainController.js'
              'helpers/services/build/sessionService.js'
              'helpers/services/build/authenticateService.js'
              'helpers/styles/main.css'
            ]
      ]).state('home',
      url: '/admin'
      templateUrl: '/views/home'
      controller: 'homeController'
      requireAuth: false
      resolve: deps: [
        '$ocLazyLoad'
        ($ocLazyLoad) ->
          $ocLazyLoad.load
            name: 'myApp'
            files: [
              'helpers/controllers/build/homeController.js'
              'helpers/styles/home.css'
            ]
      ]).state 'register',
      url: '/register'
      templateUrl: '/views/register'
      controller: 'registerController'
      requireAuth: false
      resolve: deps: [
        '$ocLazyLoad'
        ($ocLazyLoad) ->
          $ocLazyLoad.load
            name: 'myApp'
            files: [
              'helpers/controllers/build/registerController.js'
              'helpers/styles/register.css'
            ]
      ]
    return
]
