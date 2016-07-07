qmatiq.factory('userModel', ['$http', '$cookies' ,function($http, $cookies){
	var userModel = {};

	userModel.doLogin = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: 'http://api.qmatiq.piensamasalla.com/v1/usuarios/login',
			method: 'POST',
			data: {
				login: 		data.login,
				clave: 		data.clave,
				codigo:  	data.codigo
			}
		}).success(function(response){
			console.log(response);
			$cookies.put('auth', response);
		}).error(function(data, status, headers){
			//console.log(data, status, headers);
		});
	};

	userModel.getAuthStatus	= function(){
		var status = $cookies.get('auth');
		if(status){
			return true;
		}else{
			return false;
		}
	};

	userModel.doUserLogout = function(){
		$cookies.remove('auth');
	}

	return userModel;

}]);
//# sourceMappingURL=models.js.map
