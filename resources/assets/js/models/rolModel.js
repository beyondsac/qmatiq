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