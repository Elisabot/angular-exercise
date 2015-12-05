app.controller('MainController', ['$scope', function($scope) {
  
	$scope.title = 'Look at these great books';
  
  $scope.promo = 'This is the best read ever.';
  
  $scope.products = 
  [
    { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  },
  { 
    name: 'The Giver', 
    price: 14, 
    pubdate: new Date('1996', '08', '04'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  },
  { 
    name: 'Joy of Cooking', 
    price: 8, 
    pubdate: new Date('1967', '03', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  } 
];
  
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  };
  
}]);