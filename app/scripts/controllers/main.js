'use strict';

/**
 * @ngdoc function
 * @name firebaseWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseWebApp
 */
angular.module('firebaseWebApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
     var ref = new Firebase("https://blistering-heat-3711.firebaseio.com/Contacts");
     var Person = $firebase(ref).$asArray();

    $scope.person = Person;

    $scope.add = function(){
      var save = Person.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName
      });

      $scope.firstName = '';
      $scope.lastName = '';

      if(save){
        console.log('Pass: Saved Successfully');
      }
      else{
        console.log('Faild: Something wrong went');
      }
    };

    $scope.remove = function(id){
      Person.$remove(id);
    }
  })
  .controller('EditCtrl', function($scope, $location, $routeParams, $firebase){
    var fbURL = "https://blistering-heat-3711.firebaseio.com/Contacts/";
    var personURL = new Firebase(fbURL + $routeParams.id);
    $scope.person = $firebase(personURL).$asObject();

    $scope.edit = function(){
      $scope.person.$save();
      $location.path('/')
    }
  });