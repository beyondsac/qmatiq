qmatiq.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	//variables
	angular.extend($scope, {
		login : {}
	});
	//metodos
	angular.extend($scope, {
		doLogin : function(loginForm){
			var data = {
				login 	: $scope.login.login,
				clave 	: $scope.login.clave,
				codigo 	: $scope.login.codigo,
			};
			userModel.doLogin(data).then(function(){
				$location.path('/home');
			});
		}
	});
}]);