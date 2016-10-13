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