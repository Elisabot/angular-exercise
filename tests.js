describe('cardCtrl', function() {
  beforeEach(module('cardApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.sort', function() {
    it('sorts the cards in ascending order of A, 2,... 10, J, Q, K', function () {
      var $scope = {};
      var controller = $controller('cardCtrl', { $scope: $scope });
      $scope.cards = [{name:heart-2}, {diamond-a}, {spade-5}, {club-k}, {club-j}];
      $scope.sort();
      expect($scope.cards).toEqual('what we expect');
    });

    it('sorts the cards in suit order of Spade, Diamond, Club, Heart', function () {
      var $scope = {};
      var controller = $controller('cardCtrl', { $scope: $scope });
      expect($scope.strength).toEqual('strong');
    });
  });
});