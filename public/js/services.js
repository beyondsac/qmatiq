qmatiq.service('apiService', ['$resource', 'URL', function($resource, URL){
	
	this.roles = function(){
		return $resource(URL+'cuentas/1/roles/:rol_id', { rol_id :'@rol_id' }, 
			{	'get': { method: 'get'},	}
		);
	};

}]);
//# sourceMappingURL=services.js.map
