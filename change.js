var changeApp = angular.module('changeApp', []);
changeApp.controller('changeController', function($scope, $filter){

var purse = {
       dollar: {
           name: "Dollar Coin",
           value: 1.00,
           image: "img/dollar.png"
       },
       quarter: {
           name: "quarter",
           value: 0.25,
           image: "img/quarter-front.png"
       },
       dime: {
           name: "dime",
           value: 0.10,
           image: "img/dime-front.png"
       },
       nickel: {
           name: "nickel",
           value: 0.05,
           image: "img/nickle-front.png"
       },
       penny: {
           name: "penny",
           value: 0.01,
           image: "img/penny-front.png"
       }
   };

	var changeArray = [];
	$scope.changeArray = changeArray;

	$scope.makeChange = function(){
		//Make change function called by button click (ng-click)
		var leftOver = $filter("number")($scope.paid - $scope.total, "2");
		$scope.totalDue = $filter("currency")(leftOver, "$", "2");
		for(coin in purse){
			while(purse[coin].value <= leftOver){
				$filter("number")(purse[coin].value, "2");
				$scope.changeArray.push(purse[coin]);
				leftOver -= purse[coin].value;
				leftOver = $filter("number")(leftOver, "2");
			}
		}

		sortThroughCoins(changeArray);
	}

	function sortThroughCoins(arr){
		var coinAmountArray = [];
		var current = null;
		var cnt = 0;
		arr.sort(function(a, b){
			if(a.value > b.value){
				return -1;
			}else if(a.value < b.value){
				return 1;
			}else{
				return 0;
			}
		});
		for(var i = 0; i <arr.length; i++){
			if(arr[i] != current){
				if(cnt > 1){
					coinAmountArray.push("You have " + cnt + " " + current.name + "s");
				}else if(cnt == 1){
					coinAmountArray.push("You have " + cnt + " " + current.name);
				}
				current = arr[i];
				cnt = 1;
			}else{
				cnt++;
			}
		}
		if(cnt > 1){
			coinAmountArray.push("You have " + cnt + " " + current.name + "s");
		}else if(cnt == 1){
			coinAmountArray.push("You have " + cnt + " " + current.name);
		}
		$scope.coinAmount = coinAmountArray;
		console.log(coinAmountArray);	
	}

//$scope.coinAmount
//$scope.


})





