// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required

      StatusBar.styleDefault();

      // StatusBar.styleLightContent();
      // StatusBar.styleBlackTranslucent();
      // StatusBar.styleBlackOpaque();

      // StatusBar.overlaysWebView(true);
      // StatusBar.backgroundColorByName("black");
      // StatusBar.backgroundColorByHexString("#C0C0C0");

      // StatusBar.hide();
      // StatusBar.show();

    }

  });

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // pages of the app
  .state('motion', {
    url: '/motion',
    templateUrl: 'templates/motion.html',
    controller: 'MotionCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'SettingsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/motion');

});
