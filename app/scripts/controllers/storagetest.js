'use strict';

/**
 * @ngdoc function
 * @name firebaseWebApp.controller:StoragetestCtrl
 * @description
 * # StoragetestCtrl
 * Controller of the firebaseWebApp
 */
angular.module('firebaseWebApp')
  .controller('StoragetestCtrl', function ($scope, $localStorage, $sessionStorage) {
    $scope.firstName = 'Prashant';
    $scope.lastName = 'Patel';
    
    $scope.person = {
      firstname: $scope.firstName,
      lastname: $scope.lastName
    };
    //storage save
    $scope. save = function(){
      $localStorage.myData = $scope.person;
    }
    //storage load
    $scope.load = function(){
      $scope.data = $localStorage.myData;
    }
    //storage delete
    $scope.delete = function(){
      $localStorage.$reset();
    }
    //storage watch
    $scope.$watch(function(){
      return angular.toJson($localStorage);
    }, function(){
      $scope.data = $localStorage.myData;
    });
    
  });
