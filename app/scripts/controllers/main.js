'use strict';

/**
 * @ngdoc function
 * @name firebaseWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseWebApp
 */
angular.module('firebaseWebApp')
  .controller('MainCtrl', function ($scope, $firebase, LxNotificationService) {
    var ref = new Firebase("https://blistering-heat-3711.firebaseio.com/Contacts");
    var Person = $firebase(ref).$asArray();

    $scope.person = Person;

    $scope.add = function () {
      var save = Person.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName
      });

      $scope.firstName = '';
      $scope.lastName = '';

      if (save) {
        console.log('Pass: Saved Successfully');
        LxNotificationService.success('Added');
      } else {
        console.log('Faild: Something wrong went');
        LxNotificationService.error('Something went wrong');
      }
    };

    $scope.remove = function (id) {
      Person.$remove(id);
      LxNotificationService.warning('Removed');
    }
  })
  .controller('EditCtrl', function ($scope, $location, $routeParams, $firebase, LxNotificationService) {
    var fbURL = "https://blistering-heat-3711.firebaseio.com/Contacts/";
    var personURL = new Firebase(fbURL + $routeParams.id);
    $scope.person = $firebase(personURL).$asObject();

    $scope.edit = function () {
      $scope.person.$save();
      LxNotificationService.success('Saved');
      $location.path('/');
    }
  })
  .directive('firstCapital', function ($parse) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, modelCtrl) {
        
        var capitalize = function (inputText) {

          var capitalized = inputText.charAt(0).toUpperCase() + inputText.substring(1); //first letter only
          
          if (capitalized !== inputText) {
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
          }
          return capitalized;
        }
        modelCtrl.$parsers.push(capitalize);
      }
    };
  });