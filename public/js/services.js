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

	this.minicolors_predeterminado = { position: 'top right', letterCase: 'uppercase' };

}]);

qmatiq.service('upload', ['$http', '$q', 'constante', function($http, $q, constante){
	 this.uploadFile = function(file, file_id, uploadUrl){
	 	var deferred = $q.defer();
        var fd = new FormData();
        fd.append('file', file);
        if(file_id!= null){
            return $http.post(constante.URL +'archivos', fd, {
                transformRequest: angular.identity,
                headers: {'cuenta_id': 1,'Content-Type': undefined}
            })
            .success(function(res){
            	deferred.resolve(res);
            })
            .error(function(msg){
            	deferred.reject(msg)
            });
        }else{
            return $http.post(constante.URL +'archivos/'+file_id, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(res){
                deferred.resolve(res);
            })
            .error(function(msg){
                deferred.reject(msg)
            });
        }
        return deferred.promise;
    }
}]);
//# sourceMappingURL=services.js.map
