qmatiq.service('listServices', ['$http', 'URL', function($http, URL){
	this.getRolAll = function(){
		return $http.get(URL+'cuentas/1/roles');
	};

	this.getUsuarioAll = function(){
		return $http.get(URL+'cuentas/1/usuarios');
	};
}]);