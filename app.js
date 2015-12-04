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

	});
})();