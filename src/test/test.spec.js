describe("A test suite", function() {
    var controller;
    var scope;
    var expect = chai.expect;
    beforeEach(module('mainApp'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('studentController', {
            $scope: scope
        });
    }));
    it('should be initialized', function() {
        expect(scope.student.firstName).to.equals('Mahesh');
        expect(scope.student.lastName).to.equals('Parashar');
    });
    

});
