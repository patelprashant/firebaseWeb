//'use strict';

/**
 * @ngdoc function
 * @name firebaseWebApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the firebaseWebApp
 */
angular.module('firebaseWebApp')
  .controller('ScheduleCtrl', function ($scope, $firebase) {
    //    $scope.awesomeThings = [
    //      'HTML5 Boilerplate',
    //      'AngularJS',
    //      'Karma'
    //    ];
    // connect to firebase
    var ref = new Firebase("https://blistering-heat-3711.firebaseio.com/days");
    var fb = $firebase(ref);
    //sync data as an object
    var syncObject = fb.$asObject();
    //three way data binding
    syncObject.$bindTo($scope, 'days');

    //Initial sample data

    $scope.reset = function () {
      fb.$set({
        monday: {
          name: 'Monday',
          slots: {
            100: {
              time: '1:00pm',
              booked: false
            },
            300: {
              time: '3:00pm',
              booked: false
            },
            500: {
              time: '5:00pm',
              booked: false
            },
            700: {
              time: '7:00pm',
              booked: false
            }
          }
        },
        tuesday: {
          name: 'Tuesday',
          slots: {
            100: {
              time: '1:00pm',
              booked: false
            },
            300: {
              time: '3:00pm',
              booked: false
            },
            500: {
              time: '5:00pm',
              booked: false
            },
            700: {
              time: '7:00pm',
              booked: false
            }
          }
        },
        wednesday: {
          name: 'Wednesday',
          slots: {
            100: {
              time: '1:00pm',
              booked: false
            },
            300: {
              time: '3:00pm',
              booked: false
            },
            500: {
              time: '5:00pm',
              booked: false
            },
            700: {
              time: '7:00pm',
              booked: false
            }
          }
        }
      });
    };
  });