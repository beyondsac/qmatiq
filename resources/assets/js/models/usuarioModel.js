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