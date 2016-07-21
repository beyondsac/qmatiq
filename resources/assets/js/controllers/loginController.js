qmatiq.controller('loginController', ['$scope', '$location', 'userModel', 
	function($scope, $location, userModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Login';
		//variables
		angular.extend($scope, {
			login : {},
			showCargando : true,
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
	}
]);