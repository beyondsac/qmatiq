qmatiq.factory('moduloModel', ['$http', 'URL', function($http, URL){
	return {
		getAll : function(){
			return $http.get(URL+'modulos');
		},
	};
}])