var yearBornApp = angular.module('yearBornApp', []);
yearBornApp.controller('yearBornController', function($scope){



	$scope.yearMinusAge = function(age){
		var yearUserBorn = 2016 - age;
		console.log(yearUserBorn);

		$scope.year = yearUserBorn;
	}





})