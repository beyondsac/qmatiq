qmatiq.controller('headController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	//variables
	angular.extend($scope, {
		user: userModel.getUserObject(),
		navHead: [],
	});
	//metodos
	angular.extend($scope, {
		doLogout : function(){
			userModel.doUserLogout();
			$location.path('/');
		}
	});
}]);