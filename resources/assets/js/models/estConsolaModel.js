qmatiq.factory('estConsolaModel', ['$http', 'constante', function($http, constante){
	var estConsolaModel = {};

	estConsolaModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return estConsolaModel;
}]);