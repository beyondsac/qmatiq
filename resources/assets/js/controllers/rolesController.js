qmatiq.controller('rolesController', ['$scope', '$uibModal', '$resource', 'URL',function($scope, $uibModal, $resource, URL){
	//Variables
	angular.extend($scope, {
		roles : $resource(URL+'cuentas/1/roles'),
	});

	$scope.roles.get(null,function(data){
		console.log(data);
	});
	//Metodos
	angular.extend($scope, {
		editModal: function(){
			var modalInstance = $uibModal.open({
				templateUrl: 'templates/configuracion/modales/roles.html',
				controller: 'RolesModal',
				windowClass: 'modal_roles modal-predeterminado',
				size: 'sm',
				resolve: {

				}
			});
		}
	});

}]);