console.log("we're connected");

(function () { 

	var app = angular.module('cardApp', [])

	app.controller('mainCtrl', function ($scope) {
		$scope.shuffleButton = function () {
			console.log("this is shuffleButton");
		};
		$scope.sortButton = function () {
			console.log("this is sortButton")
		};

	app.controller('cardCtrl', ['$scope', function($scope) {
		$scope.cards = 
		[
			// Club Suit
			{
				name:"club-a",
				img: 'img/deck/club-A.png'
			},
			{
				name:"club-2",
				img: 'img/deck/club-2.png'
			},
			{
				name:"club-3",
				img: 'img/deck/club-3.png'
			},
			{
				name:"club-4",
				img: 'img/deck/club-4.png'
			},
			{
				name:"club-5",
				img: 'img/deck/club-5.png'
			},
			{
				name:"club-6",
				img: 'img/deck/club-6.png'
			},
			{
				name:"club-7",
				img: 'img/deck/club-7.png'
			},
			{
				name:"club-8",
				img: 'img/deck/club-8.png'
			},
			{
				name:"club-9",
				img: 'img/deck/club-9.png'
			},
			{
				name:"club-10",
				img: 'img/deck/club-10.png'
			},
			{
				name:"club-j",
				img: 'img/deck/club-J.png'
			},
			{
				name:"club-q",
				img: 'img/deck/club-Q.png'
			},
			{
				name:"club-k",
				img: 'img/deck/club-K.png'
			},
			//Heart Suit
			{
				name:"heart-a",
				img: 'img/deck/heart-A.png'
			},
			{
				name:"heart-2",
				img: 'img/deck/heart-2.png'
			},
			{
				name:"heart-3",
				img: 'img/deck/heart-3.png'
			},
			{
				name:"heart-4",
				img: 'img/deck/heart-4.png'
			},
			{
				name:"heart-5",
				img: 'img/deck/heart-5.png'
			},
			{
				name:"heart-6",
				img: 'img/deck/heart-6.png'
			},
			{
				name:"heart-7",
				img: 'img/deck/heart-7.png'
			},
			{
				name:"heart-8",
				img: 'img/deck/heart-8.png'
			},
			{
				name:"heart-9",
				img: 'img/deck/heart-9.png'
			},
			{
				name:"heart-10",
				img: 'img/deck/heart-10.png'
			},
			{
				name:"heart-j",
				img: 'img/deck/heart-J.png'
			},
			{
				name:"heart-q",
				img: 'img/deck/heart-Q.png'
			},
			{
				name:"heart-k",
				img: 'img/deck/heart-K.png'
			},
			//Spade Suit
			{
				name:"spade-a",
				img: 'img/deck/spade-A.png'
			},
			{
				name:"spade-2",
				img: 'img/deck/spade-2.png'
			},
			{
				name:"spade-3",
				img: 'img/deck/spade-3.png'
			},
			{
				name:"spade-4",
				img: 'img/deck/spade-4.png'
			},
			{
				name:"spade-5",
				img: 'img/deck/spade-5.png'
			},
			{
				name:"spade-6",
				img: 'img/deck/spade-6.png'
			},
			{
				name:"spade-7",
				img: 'img/deck/spade-7.png'
			},
			{
				name:"spade-8",
				img: 'img/deck/spade-8.png'
			},
			{
				name:"spade-9",
				img: 'img/deck/spade-9.png'
			},
			{
				name:"spade-10",
				img: 'img/deck/spade-10.png'
			},
			{
				name:"spade-j",
				img: 'img/deck/spade-J.png'
			},
			{
				name:"spade-q",
				img: 'img/deck/spade-Q.png'
			},
			{
				name:"spade-k",
				img: 'img/deck/spade-K.png'
			},
			//Diamond Suit
			{
				name:"diamond-a",
				img: 'img/deck/diamond-A.png'
			},
			{
				name:"diamond-2",
				img: 'img/deck/diamond-2.png'
			},
			{
				name:"diamond-3",
				img: 'img/deck/diamond-3.png'
			},
			{
				name:"diamond-4",
				img: 'img/deck/diamond-4.png'
			},
			{
				name:"diamond-5",
				img: 'img/deck/diamond-5.png'
			},
			{
				name:"diamond-6",
				img: 'img/deck/diamond-6.png'
			},
			{
				name:"diamond-7",
				img: 'img/deck/diamond-7.png'
			},
			{
				name:"diamond-8",
				img: 'img/deck/diamond-8.png'
			},
			{
				name:"diamond-9",
				img: 'img/deck/diamond-9.png'
			},
			{
				name:"diamond-10",
				img: 'img/deck/diamond-10.png'
			},
			{
				name:"diamond-j",
				img: 'img/deck/diamond-J.png'
			},
			{
				name:"diamond-q",
				img: 'img/deck/diamond-Q.png'
			},
			{
				name:"diamond-k",
				img: 'img/deck/diamond-K.png'
			},
		]
	}
		
	])

	});
})();