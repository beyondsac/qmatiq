qmatiq.factory('localModel', ['$http', 'constante', function($http, constante){
	var localModel = {};

	localModel.getAll = function(){
		return $http.get(constante.URL+'cuentas/1/locales');
	};

	localModel.get = function(id){
		return $http.get(constante.URL+'locales/'+id);
	};

	localModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : constante.URL+'locales',
			method : 'POST',
			data : data
		});
	};

	localModel.put = function(id, data){
		return $http.put(constante.URL+'locales/'+id, data);
	};

	localModel.delete = function(id){
		return $http.delete(constante.URL+'locales/'+id);
	};
	
	return localModel;
}]);