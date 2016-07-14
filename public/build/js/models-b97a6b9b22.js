qmatiq.factory('userModel', ['$http', '$cookies', 'URL', function($http, $cookies, URL){
	var userModel = {};

	userModel.doLogin = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: URL+'usuarios/login',
			method: 'POST',
			data: {
				login: 		data.login,
				clave: 		data.clave,
				codigo:  	data.codigo
			}
		}).success(function(response){
			//console.log(response);
			$cookies.put('auth', JSON.stringify(response));
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

	userModel.getUserObject = function(){
		var userObj = angular.fromJson($cookies.get('auth'));
		return userObj;
	};

	userModel.doUserLogout = function(){
		$cookies.remove('auth');
	}

	return userModel;

}]);
qmatiq.factory('rolModel', [ '$http', 'URL', function($http, URL){
	return {
		getAll : function(){
			return $http.get(URL+'cuentas/1/roles');
		},
		getRolSelect : function(id = 2){
			return $http.get(URL+'roles/'+id);
		},
	}

}]);
qmatiq.factory('moduloModel', ['$http', 'URL', function($http, URL){
	return {
		getAll : function(){
			return $http.get(URL+'modulos');
		},
	};
}])
//# sourceMappingURL=models.js.map
