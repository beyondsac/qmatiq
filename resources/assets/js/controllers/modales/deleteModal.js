qmatiq.controller('deleteModal', ['$scope', '$uibModalInstance',
	function($scope, $uibModalInstance){
		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			delete: function(){
				$uibModalInstance.close(true);
			}
		});
	}
]);