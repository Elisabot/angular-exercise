describe('cardCtrl', function() {
  beforeEach(module('cardApp'));

  var $scope, controller;

  beforeEach(inject(function(_$controller_){

    $controller = _$controller_;
  }));

  beforeEach(function() {
    $scope = {};
    controller = $controller('cardCtrl', { $scope: $scope });
  });

  describe('$scope.shuffle', function() {


    it('value of shuffleNum to make sure that it is 5-7', function() {

      $scope.shuffle();
      expect($scope.shuffleNum).toBeLessThan(7.1);
      expect($scope.shuffleNum).toBeGreaterThan(4.9);
    });

    it('check to see if shuffle changes order of array', function() {
      var testArr = $scope.cards.slice()
      $scope.shuffle();
      expect($scope.cards).not.toEqual(testArr);
    });

  });
});