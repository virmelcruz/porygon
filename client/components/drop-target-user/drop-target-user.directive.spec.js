'use strict';

describe('Directive: dropTargetUser', function () {

  // load the directive's module and view
  beforeEach(module('porygonApp'));
  beforeEach(module('components/drop-target-user/drop-target-user.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<drop-target-user></drop-target-user>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the dropTargetUser directive');
  }));
});