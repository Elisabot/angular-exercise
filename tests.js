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
      $scope.cards = [{name: "heart-2"}, {name: "diamond-a"}, {name: "spade-5"}, {name: "club-k"}, {name: "club-j"}];
      $scope.sort();
      expect($scope.cards).toEqual([{name: "diamond-a"}, {name: "heart-2"}, {name: "spade-5"}, {name: "club-j"}, {name: "club-k"}]);
    });

    it('sorts the cards in suit order of Spade, Diamond, Club, Heart', function () {
      var $scope = {};
      var controller = $controller('cardCtrl', { $scope: $scope });
      $scope.cards = [{name: "heart-2"}, {name: "diamond-a"}, {name: "spade-5"}, {name: "club-k"}, {name: "club-j"}];
      expect($scope.cards).toEqual([{name: "spade-5"}, {name: "diamond-a"}, {name: "heart-2"}, {name: "club-j"}, {name: "club-k"}];);
    });
  });
});