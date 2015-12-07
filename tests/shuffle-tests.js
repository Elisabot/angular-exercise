describe('cardCtrl', function() {
  beforeEach(module('cardApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){

    $controller = _$controller_;
  }));

  describe('$scope.shuffle', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('cardCtrl', { $scope: $scope });
    });

    //let's check halfDeck.length and the values of the first and last objects
    // it('firstHalfDeck slices off the first two suits and deposites them into an array', function() {
    //   $scope.shuffle();
    //   expect($scope.fistHalfDeck[0]).toEqual({
    //     suit: "spade",
    //     rank: 1,
    //     name: "spade-a",
    //     img: 'img/deck/spade-A.png'
    //   });
    // });

    // it('firstHalfDeck slices off the first two suits and deposites them into an array', function() {
    //   $scope.shuffle();
    //   expect($scope.fistHalfDeck[26]).toEqual({
    //     suit: "diamond",
    //     rank: 13,
    //     name: "diamond-k",
    //     img: 'img/deck/diamond-K.png'
    //   });
    // });

    // it('sorts cardA and cardB with a ratio of 1 to 1 through 3 to 1', function() {
    //   $scope.cards = '';
    //   $scope.shuffle();
    //   expect($scope.strength).toEqual();
    // });

    // it('repeates shuffle 3 to 7 times', function() {
    //   $scope.cards = '';
    //   $scope.shuffle();
    //   expect($scope.strength).toEqual();
    // });

  });
});