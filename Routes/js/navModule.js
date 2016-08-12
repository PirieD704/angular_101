// Assign a variable to our angular.module. we need to include ngRoutes
// If Angular can't find the module (included in the routes script)
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);
navRoutes.controller('navController', function($scope, $http){

})


// attach a config to our module. specifically bring in the $routeProvider service
// This service is available because of the ngRoute above!
// It has a 'when' method. It watches the URL and 'when' there is a match
// it will set the template URl which will go into the ng-view in the ng-view
// It will set the controller to that view.
// As a last resort we have an otherwise which will act as a catch-all
navRoutes.config(function($routeProvider){
	$routeProvider.when('/locations',{
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'contactController'
	});
	$routeProvider.otherwise('/about')
})



