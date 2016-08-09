var toDoApp = angular.module('toDoApp', []);
toDoApp.controller('toDoController', function($scope){

$scope.listItems = [
	{
		title:"ipsum",
		description: "ipsum",
		deadline: "ipsum"
	},
	{
		title:"ipsum2",
		description: "ipsum2",
		deadline: "ipsum2"
	},
	{
		title:"ipsum3",
		description: "ipsum3",
		deadline: "ipsum3"
	}
];

	$scope.addListItem = function(newTitle, newDescription, newDeadline){
		$scope.listItems.push(
		{
			title: newTitle,
			description: newDescription,
			deadline: newDeadline
		})
		$scope.newTitle = "";
		$scope.newDescription = "";
		$scope.newDeadline = "";
	}

	$scope.remove = function(index){
		$scope.listItems.splice(index, 1);
	}


});