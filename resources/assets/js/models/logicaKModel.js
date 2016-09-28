qmatiq.factory('logicaKModel', ['$http', 'constante', function($http, constante){
	var logicaKModel = {};

	logicaKModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return logicaKModel;
}]);