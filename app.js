// console.log("we're connected");

(function () { 

	var app = angular.module('cardApp', [])

	app.controller('cardCtrl', ['$scope', function($scope) {
		$scope.cards = 
		[
			//Spade Suit
			{
				suite: "spade",
				rank: 1,
				name: "spade-a",
				img: 'img/deck/spade-A.png'
			},
			{
				suite: "spade",
				rank: 2,
				name: "spade-2",
				img: 'img/deck/spade-2.png'
			},
			{
				suite: "spade",
				rank: 3,
				name: "spade-3",
				img: 'img/deck/spade-3.png'
			},
			{
				suite: "spade",
				rank: 4,
				name: "spade-4",
				img: 'img/deck/spade-4.png'
			},
			{
				suite: "spade",
				rank: 5,
				name: "spade-5",
				img: 'img/deck/spade-5.png'
			},
			{
				suite: "spade",
				rank: 6,
				name: "spade-6",
				img: 'img/deck/spade-6.png'
			},
			{
				suite: "spade",
				rank: 7,
				name: "spade-7",
				img: 'img/deck/spade-7.png'
			},
			{
				suite: "spade",
				rank: 8,
				name: "spade-8",
				img: 'img/deck/spade-8.png'
			},
			{
				suite: "spade",
				rank: 9,
				name: "spade-9",
				img: 'img/deck/spade-9.png'
			},
			{
				suite: "spade",
				rank: 10,
				name: "spade-10",
				img: 'img/deck/spade-10.png'
			},
			{
				suite: "spade",
				rank: 11,
				name: "spade-j",
				img: 'img/deck/spade-J.png'
			},
			{
				suite: "spade",
				rank: 12,
				name: "spade-q",
				img: 'img/deck/spade-Q.png'
			},
			{
				suite: "spade",
				rank: 13,
				name: "spade-k",
				img: 'img/deck/spade-K.png'
			},
			//Diamond Suit
			{
				suite: "diamond",
				rank: 1,
				name: "diamond-a",
				img: 'img/deck/diamond-A.png'
			},
			{
				suite: "diamond",
				rank: 2,
				name: "diamond-2",
				img: 'img/deck/diamond-2.png'
			},
			{
				suite: "diamond",
				rank: 3,
				name: "diamond-3",
				img: 'img/deck/diamond-3.png'
			},
			{
				suite: "diamond",
				rank: 4,
				name: "diamond-4",
				img: 'img/deck/diamond-4.png'
			},
			{
				suite: "diamond",
				rank: 5,
				name: "diamond-5",
				img: 'img/deck/diamond-5.png'
			},
			{
				suite: "diamond",
				rank: 6,
				name: "diamond-6",
				img: 'img/deck/diamond-6.png'
			},
			{
				suite: "diamond",
				rank: 7,
				name: "diamond-7",
				img: 'img/deck/diamond-7.png'
			},
			{
				suite: "diamond",
				rank: 8,
				name: "diamond-8",
				img: 'img/deck/diamond-8.png'
			},
			{
				suite: "diamond",
				rank: 9,
				name: "diamond-9",
				img: 'img/deck/diamond-9.png'
			},
			{
				suite: "diamond",
				rank: 10,
				name: "diamond-10",
				img: 'img/deck/diamond-10.png'
			},
			{
				suite: "diamond",
				rank: 11,
				name: "diamond-j",
				img: 'img/deck/diamond-J.png'
			},
			{
				suite: "diamond",
				rank: 12,
				name: "diamond-q",
				img: 'img/deck/diamond-Q.png'
			},
			{
				suite: "diamond",
				rank: 13,
				name: "diamond-k",
				img: 'img/deck/diamond-K.png'
			},
			// Club Suit
			{
				suite: "club",
				rank: 1,
				name: "club-a",
				img: 'img/deck/club-A.png'
			},
			{
				suite: "club",
				rank: 2,
				name: "club-2",
				img: 'img/deck/club-2.png'
			},
			{
				suite: "club",
				rank: 3,
				name: "club-3",
				img: 'img/deck/club-3.png'
			},
			{
				suite: "club",
				rank: 4,
				name: "club-4",
				img: 'img/deck/club-4.png'
			},
			{
				suite: "club",
				rank: 5,
				name: "club-5",
				img: 'img/deck/club-5.png'
			},
			{
				suite: "club",
				rank: 6,
				name: "club-6",
				img: 'img/deck/club-6.png'
			},
			{
				suite: "club",
				rank: 7,
				name: "club-7",
				img: 'img/deck/club-7.png'
			},
			{
				suite: "club",
				rank: 8,
				name: "club-8",
				img: 'img/deck/club-8.png'
			},
			{
				suite: "club",
				rank: 9,
				name: "club-9",
				img: 'img/deck/club-9.png'
			},
			{
				suite: "club",
				rank: 10,
				name: "club-10",
				img: 'img/deck/club-10.png'
			},
			{
				suite: "club",
				rank: 11,
				name: "club-j",
				img: 'img/deck/club-J.png'
			},
			{
				suite: "club",
				rank: 12,
				name: "club-q",
				img: 'img/deck/club-Q.png'
			},
			{
				suite: "club",
				rank: 13,
				name: "club-k",
				img: 'img/deck/club-K.png'
			},
			//Heart Suit
			{
				suite: "heart",
				rank: 1,
				name: "heart-a",
				img: 'img/deck/heart-A.png'
			},
			{
				suite: "heart",
				rank: 2,
				name: "heart-2",
				img: 'img/deck/heart-2.png'
			},
			{
				suite: "heart",
				rank: 3,
				name: "heart-3",
				img: 'img/deck/heart-3.png'
			},
			{
				suite: "heart",
				rank: 4,
				name: "heart-4",
				img: 'img/deck/heart-4.png'
			},
			{
				suite: "heart",
				rank: 5,
				name: "heart-5",
				img: 'img/deck/heart-5.png'
			},
			{
				suite: "heart",
				rank: 6,
				name: "heart-6",
				img: 'img/deck/heart-6.png'
			},
			{
				suite: "heart",
				rank: 7,
				name: "heart-7",
				img: 'img/deck/heart-7.png'
			},
			{
				suite: "heart",
				rank: 8,
				name: "heart-8",
				img: 'img/deck/heart-8.png'
			},
			{
				suite: "heart",
				rank: 9,
				name: "heart-9",
				img: 'img/deck/heart-9.png'
			},
			{
				suite: "heart",
				rank: 10,
				name: "heart-10",
				img: 'img/deck/heart-10.png'
			},
			{
				suite: "heart",
				rank: 11,
				name: "heart-j",
				img: 'img/deck/heart-J.png'
			},
			{
				suite: "heart",
				rank: 12,
				name: "heart-q",
				img: 'img/deck/heart-Q.png'
			},
			{
				suite: "heart",
				rank: 13,
				name: "heart-k",
				img: 'img/deck/heart-K.png'
			}
		]

		$scope.shuffle = function () {
			console.log("this is shuffleButton");
			cards.sort();
		}

		$scope.sort = function () {
			return 
			console.log("this is sortButton");
		}

	}])

})();