qmatiq.factory('usuarioModel', ['$http', 'URL', function($http, URL){
	var usuarioModel = {};

	usuarioModel.getAll = function(){
		return $http.get(URL+'cuentas/1/usuarios');
	};

	usuarioModel.get = function(id){
		return $http.get(URL+'usuarios/'+id);
	};

	usuarioModel.getUsuariosLocales = function(cuenta_id,id){
		return $http({
			headers: {'cuenta_id': cuenta_id },
			url: URL+'usuarios/'+id+'/locales',
			method: 'GET'
		});
	};

	usuarioModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : URL+'usuarios',
			method : 'POST',
			data : data
		});
	};

	usuarioModel.put = function(id, data){
		return $http.put(URL+'usuarios/'+id, data);
	};

	usuarioModel.delete = function(id){
		return $http.delete(URL+'usuarios/'+id);
	};
	
	return usuarioModel;
}]);