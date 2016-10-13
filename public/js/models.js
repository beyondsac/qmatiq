qmatiq.factory('userModel', ['$http', '$cookies', 'constante', function($http, $cookies, constante){
	var userModel = {};

	userModel.doLogin = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: constante.URL+'usuarios/login',
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
qmatiq.factory('rolModel', [ '$http', 'constante', function($http, constante){
	var rolModel = {};
	//Services Api
	rolModel.getAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/roles');
	};

	rolModel.getRol = function(id){
		return $http.get(constante.URL+'roles/'+id);
	};

	rolModel.getRolPermiso = function(id){
		return $http.get(constante.URL+'roles/'+id+'/permisos');
	};

	rolModel.postRol = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'roles',
			method : 'POST',
			data : data
		});
	};

	rolModel.putRol = function(id, data){
		return $http.put(constante.URL+'roles/'+id, data);
	};

	rolModel.deleteRol = function(id){
		return $http.delete(constante.URL+'roles/'+id);
	};
	//prepararData POST y PUT
	rolModel.prepararArrayModulos = function(permisos){
		//personalizando modulos
		var _permisos = permisos;
		var modulos = [];
		for (var i = 0; i < _permisos.length; i++) {
			if(_permisos[i]['acceso'] == 1){
				modulos.push(
					{ id : _permisos[i]['modulo_id'] }
				);
			}
		};
		return modulos;
	};

	return rolModel;
}]);
qmatiq.factory('usuarioModel', ['$http', 'constante', function($http, constante){
	var usuarioModel = {};

	usuarioModel.getAll = function(local_id){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/usuarios?local_id='+local_id);
	};

	usuarioModel.get = function(id){
		return $http.get(constante.URL+'usuarios/'+id);
	};

	usuarioModel.getUsuariosLocales = function(id){
		return $http({
			headers: {'cuenta_id': constante.cuenta_id },
			url: constante.URL+'usuarios/'+id+'/locales',
			method: 'GET'
		});
	};

	usuarioModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'usuarios',
			method : 'POST',
			data : data
		});
	};

	usuarioModel.put = function(id, data){
		return $http.put(constante.URL+'usuarios/'+id, data);
	};

	usuarioModel.delete = function(id){
		return $http.delete(constante.URL+'usuarios/'+id);
	};
	//prepararData POST y PUT
	usuarioModel.prepararArrayLocales = function(locales){
		//personalizando locales
		var mis_locales = [];
		for (var i = 0; i < locales.length; i++) {
			if(locales[i]['acceso'] == 1){
				mis_locales.push(
					{ id : locales[i]['local_id'] }
				);
			}
		};
		return mis_locales;
	};
	
	return usuarioModel;
}]);
qmatiq.factory('localModel', ['$http', 'constante', function($http, constante){
	var localModel = {};

	localModel.getAll = function(){
		return $http.get(constante.URL+'cuentas/1/locales');
	};

	localModel.get = function(id){
		return $http.get(constante.URL+'locales/'+id);
	};

	localModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'locales',
			method : 'POST',
			data : data
		});
	};

	localModel.put = function(id, data){
		return $http.put(constante.URL+'locales/'+id, data);
	};

	localModel.delete = function(id){
		return $http.delete(constante.URL+'locales/'+id);
	};
	
	return localModel;
}]);
qmatiq.factory('configuracionModel', ['$http', 'constante', function($http, constante){
	var configuracionModel = {};

	configuracionModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	configuracionModel.getAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion');
	};
	
	return configuracionModel;
}]);
qmatiq.factory('moduloModel', ['$http', 'constante', function($http, constante){
	var moduloModel = {};

	return moduloModel;
}])
//# sourceMappingURL=models.js.map
