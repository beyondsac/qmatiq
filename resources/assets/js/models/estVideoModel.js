qmatiq.factory('estVideoModel', ['$http', 'constante', function($http, constante){
	var estVideoModel = {};

	estVideoModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return estVideoModel;
}]);