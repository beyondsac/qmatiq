//TODO: ESTA DATA TODAVIA NO EXISTE EN EL API **********************************************
qmatiq.factory('peticionesModel', ['$http', 'constante', function($http, constante){
	var peticionesModel = {};

	peticionesModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion',
			method : 'POST',
			data : data
		});
	};
	
	return peticionesModel;
}]);