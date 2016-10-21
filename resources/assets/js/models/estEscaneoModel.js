qmatiq.factory('estEscaneoModel', ['$http', 'constante', function($http, constante){
	var estEscaneoModel = {};

	estEscaneoModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return estEscaneoModel;
}]);