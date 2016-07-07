qmatiq.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	angular.extend($scope, {
		doLogin : function(loginForm){
			var data = {
				login 	: $scope.login.login,
				clave 	: $scope.login.clave,
				codigo 	: $scope.login.codigo,
			};
			userModel.doLogin(data).then(function(){
				$location.path('/dashboard');
			});
		},
		doLogout : function(){
			userModel.doUserLogout();
			$location.path('/');
		}
	});
}]);
//# sourceMappingURL=controllers.js.map
