//'use strict';

/**
 * @ngdoc function
 * @name firebaseWebApp.controller:navCtrl
 * @description
 * # navCtrl
 * Controller of the firebaseWebApp
 */
angular.module('firebaseWebApp')
  .controller('navCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });