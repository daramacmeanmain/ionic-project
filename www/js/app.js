angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.one', {
    url: '/one',
    views: {
      'tab-one': {
        templateUrl: 'templates/tab-one.html',
        controller: 'appCtrl'
      }
    }
  })
  
    .state('tab.two', {
    url: '/two',
    views: {
      'tab-two': {
        templateUrl: 'templates/tab-two.html',
        controller: 'appCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/one');

});
