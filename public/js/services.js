qmatiq.service('listServices', ['$http', 'URL', function($http, URL){
	this.getRolAll = function(){
		return $http.get(URL+'cuentas/1/roles');
	};

	this.getUsuarioAll = function(){
		return $http.get(URL+'cuentas/1/usuarios');
	};
}]);
qmatiq.service('recursos', ['$http', 'URL', function($http, URL){
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
