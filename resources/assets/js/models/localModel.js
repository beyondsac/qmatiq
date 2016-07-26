qmatiq.factory('localModel', ['$http', 'URL', function($http, URL){
	var localModel = {};

	localModel.getAll = function(){
		return $http.get(URL+'cuentas/1/locales');
	};

	localModel.get = function(id){
		return $http.get(URL+'locales/'+id);
	};

	localModel.post = function(data){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url : URL+'locales',
			method : 'POST',
			data : data
		});
	};

	localModel.put = function(id, data){
		return $http.put(URL+'locales/'+id, data);
	};

	localModel.delete = function(id){
		return $http.delete(URL+'locales/'+id);
	};
	
	return localModel;
}]);