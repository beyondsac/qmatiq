qmatiq.factory('estMobileModel', ['$http', 'constante', function($http, constante){
	var estMobileModel = {};

	estMobileModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return estMobileModel;
}]);