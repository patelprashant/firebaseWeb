'use strict';

/**
 * @ngdoc overview
 * @name firebaseWebApp
 * @description
 * # firebaseWebApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'firebase',
    'lumx',
    'lumx.notification',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/storagetest', {
        templateUrl: 'views/storagetest.html',
        controller: 'StoragetestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
