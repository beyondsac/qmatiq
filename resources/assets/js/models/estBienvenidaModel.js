qmatiq.factory('estBienvenidaModel', ['$http', 'constante', function($http, constante){
	var estBienvenidaModel = {};

	estBienvenidaModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return estBienvenidaModel;
}]);