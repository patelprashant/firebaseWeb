'use strict';

describe('Controller: StoragetestCtrl', function () {

  // load the controller's module
  beforeEach(module('firebaseWebApp'));

  var StoragetestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoragetestCtrl = $controller('StoragetestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
