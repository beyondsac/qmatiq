qmatiq.factory('segKioscoModel', ['$http', 'constante', function($http, constante){
	var segKioscoModel = {};

	segKioscoModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};

	
	return segKioscoModel;
}]);