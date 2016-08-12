
// Attach another controller to our app. this is not used unless the 
// the router would load it when the '.when' is true
navRoutes.controller('locationsController', function($scope){
	$scope.message = "test locations";
})