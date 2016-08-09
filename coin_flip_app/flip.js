var coinFlipApp = angular.module('coinFlipApp', []);
coinFlipApp.controller('headsOrTailsController', function($scope){
	$scope.test = "TESTING!";


	//The user clicked on heads - ng-click="heads()" in the view
	$scope.heads = function(){
		console.log("Test heads");
		$scope.userGuess = "heads";
		var flipResult = flip();
		$scope.guess = true;
		if(flipResult.coinFlipResult == 'heads'){
			$scope.message = "You won!";
		}else{
			$scope.message = "You lost!";
		}
		$scope.coin = flipResult.coinImg;
	}

	//The user clicked on tails - ng-click="tails()" in the view
	$scope.tails = function(){
		console.log("Test tails");
		$scope.userGuess = "tails";
		var flipResult = flip();
		$scope.guess = true;
		if(flipResult.coinFlipResult == 'tails'){
			$scope.message = "You won!";
		}else{
			$scope.message = "You lost!"
		}
		$scope.coin = flipResult.coinImg;
	}

	//The user clicked on play - ng-click="play()" in the view
	$scope.playGame = function(){
		console.log("Test play");
		$scope.message = null;
		$scope.guess = false;
		$scope.coinFlipResult = null;
	}

	var flip = function(){
		var rand = Math.random();
		$scope.guess = true;
		var flipResult = {
			coinImg: null,
			coinFlipResult: null,
		}
		if(rand > .5){
			flipResult.coinImg = "img/quarter-front.png";
			flipResult.coinFlipResult = "heads";
		}else{
			flipResult.coinImg = "img/quarter-back.png";
			flipResult.coinFlipResult = "tails";
		}
		return flipResult;
	}


})