qmatiq.factory('rolModel', [ '$http', 'URL', function($http, URL){
	return {
		getAll : function(){
			return $http.get(URL+'cuentas/1/roles');
		},
		getRolSelect : function(id = 2){
			return $http.get(URL+'roles/'+id);
		},
	}

}]);