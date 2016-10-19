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