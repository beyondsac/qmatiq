qmatiq.factory('segConsolaModel', ['$http', 'constante', function($http, constante){
	var segConsolaModel = {};

	segConsolaModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return segConsolaModel;
}]);