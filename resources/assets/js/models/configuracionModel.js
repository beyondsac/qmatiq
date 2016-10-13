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