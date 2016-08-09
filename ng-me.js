var styleApp = angular.module('styleApp', []);
styleApp.controller("styleController", function($scope){


	$scope.myColor = 'red';

	var Student = function(name, formerly){
		this.name = name;
		this.former = formerly;
	}

	$scope.students = [];

	$scope.students.push(new Student('Brett', 'USAF'));
	$scope.students.push(new Student('Wes', 'wildcat (also Mr. Clean Model)'));
	$scope.students.push(new Student('Drew', 'Westminister wildcat'))
	$scope.students.push(new Student('Daniel', 'Cheering for Argentina in Rio'))
	$scope.students.push(new Student('Dan', "Lego Nerd"))
	$scope.students.push(new Student('Danny', "Strat Ruiner"))
	$scope.students.push(new Student('Alex', "Assassin Seriously. Trust me."))
	$scope.students.push(new Student('Paige', "Brunt easily"))
	$scope.students.push(new Student('Dave', "Cam lover"))
	$scope.students.push(new Student('Eric', "Useless without BS"))
	$scope.students.push(new Student('Shirlette', "Where the heck is she?"))
	$scope.students.push(new Student('Jackson', "Volition Dev"))
	$scope.students.push(new Student('JT', "Every woman's dream"))
	$scope.students.push(new Student('Summer', "CS ninja"))

})