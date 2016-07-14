qmatiq.controller('rolModal', ['$scope', '$uibModalInstance', 'test', function($scope, $uibModalInstance, test){
	console.log($uibModalInstance);
	//metodos
	$scope.close = function(){
		$scope.$dismiss('cancel');
	};

}]);