qmatiq.controller('seguridadConsolaModal', ['$scope', '$uibModalInstance', 'Item', 'recursos', 'constante', 
	function($scope, $uibModalInstance, Item, recursos, constante){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
		});

		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			}
		});
	
}]);