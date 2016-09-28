qmatiq.service('listServices', ['$http', 'constante', function($http, constante){
	this.getRolAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/roles');
	};

	this.getUsuarioAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/usuarios');
	};

	this.getLocalAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/locales');
	};

	this.getConfiguracionAll = function(){
		return $http.get(constante.URL+'cuentas/'+constante.cuenta_id+'/configuracion');
	};
}]);