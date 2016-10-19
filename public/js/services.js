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
qmatiq.service('recursos', [ function(){
	this.changeCheck =  function(acceso){
		if(acceso == 0){
			return 'fc_red check_disabled fa-square-o';
		}else{
			return 'fa-check-square-o';
		}
	};

	this.changeAcceso = function(acceso){
		if(acceso == 0){
			return acceso = 1;
		}
		return acceso = 0;
	};
}]);
//# sourceMappingURL=services.js.map
