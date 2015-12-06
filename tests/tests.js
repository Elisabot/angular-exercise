describe('cardCtrl', function() {
  beforeEach(module('cardApp'));

  var $controller;
  var testRank = [{
      suit: "diamond",
      rank: 2,
      name: "diamond-2",
      img: 'img/deck/diamond-2.png'
    }, { 
      suit: "diamond",
      rank: 1,
      name: "diamond-a",
      img: 'img/deck/diamond-1.png' 
    }, {
      suit: "diamond",
      rank: 5,
      name: "diamond-5",
      img: 'img/deck/diamond-5.png'
    }, {
      suit: "diamond",
      rank: 13,
      name: "diamond-k",
      img: 'img/deck/diamond-k.png'
    }, {
      suit: "diamond",
      rank: 11,
      name: "diamond-j",
      img: 'img/deck/diamond-j.png'
  }];

  var testSuit = [{
      suit: "club",
      rank: 5,
      name: "club-5",
      img: 'img/deck/club-5.png'
    }, { 
      suit: "diamond",
      rank: 5,
      name: "diamond-5",
      img: 'img/deck/diamond-5.png' 
    },  {
      suit: "spade",
      rank: 5,
      name: "spade-5",
      img: 'img/deck/spade-5.png'
    }, {
      suit: "heart",
      rank: 5,
      name: "heart-5",
      img: 'img/deck/heart-5.png'
    }];

//all the same suit different rank
var rankAscending = [{ 
      suit: "diamond",
      rank: 1,
      name: "diamond-a",
      img: 'img/deck/diamond-1.png' 
    }, {
      suit: "diamond",
      rank: 2,
      name: "diamond-2",
      img: 'img/deck/diamond-2.png'
    }, {
      suit: "diamond",
      rank: 5,
      name: "diamond-5",
      img: 'img/deck/diamond-5.png'
    }, {
      suit: "diamond",
      rank: 11,
      name: "diamond-j",
      img: 'img/deck/diamond-j.png'
    }, {
      suit: "diamond",
      rank: 13,
      name: "diamond-k",
      img: 'img/deck/diamond-k.png'
  }];

//all the same rank different suit
var suitAscending = [{
      suit: "spade",
      rank: 5,
      name: "spade-5",
      img: 'img/deck/spade-5.png'
    }, { 
      suit: "diamond",
      rank: 5,
      name: "diamond-5",
      img: 'img/deck/diamond-5.png' 
    }, {
      suit: "club",
      rank: 5,
      name: "club-5",
      img: 'img/deck/club-5.png'
    }, {
      suit: "heart",
      rank: 5,
      name: "heart-5",
      img: 'img/deck/heart-5.png'
    }];

  beforeEach(inject(function(_$controller_){

    $controller = _$controller_;
  }));

  describe('$scope.sort', function() {
    it('sorts the cards in ascending order of A, 2,... 10, J, Q, K', function () {
      var $scope = {};
      var controller = $controller('cardCtrl', { $scope: $scope });
      $scope.cards = testRank;
      $scope.sort();
      expect($scope.cards).toEqual(rankAscending);
    });

    it('sorts the cards in suit order of Spade, Diamond, Club, Heart', function () {
      var $scope = {};
      var controller = $controller('cardCtrl', { $scope: $scope });
      $scope.cards = testSuit;
      $scope.sort();
      expect($scope.cards).toEqual(suitAscending);
    });
  });
});