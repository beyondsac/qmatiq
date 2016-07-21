qmatiq.factory('rolModel', [ '$http', 'URL', function($http, URL){
	var rolModel = {};
	//Services Api
	rolModel.getAll = function(){
		return $http.get(URL+'cuentas/1/roles');
	};

	rolModel.getRol = function(id){
		return $http.get(URL+'roles/'+id);
	};

	rolModel.getRolPermiso = function(id){
		return $http.get(URL+'roles/'+id+'/permisos');
	};

	rolModel.postRol = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : URL+'roles',
			method : 'POST',
			data : data
		});
	};

	rolModel.putRol = function(id, data){
		return $http.put(URL+'roles/'+id, data);
	};

	rolModel.deleteRol = function(id){
		return $http.delete(URL+'roles/'+id);
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

	rolModel.prepararData = function(data){
		var mi_data = {
			nombre : data.nombre,
			cuenta_id : data.cuenta_id,
			modulos : data.modulos
		};
		return mi_data;
	};

	return rolModel;
}]);