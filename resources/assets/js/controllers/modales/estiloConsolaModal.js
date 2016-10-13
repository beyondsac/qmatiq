qmatiq.controller('estiloConsolaModal', [
	'$scope',
	'$uibModalInstance', 
	'Item',
	'configuracionModel',
	'upload',
	'recursos',
	'constante',
	'$q', function(
		$scope, 
		$uibModalInstance, 
		Item,
		configuracionModel,
		upload,
		recursos, 
		constante,
		$q){
		//variables angularjs
		angular.extend( $scope, {
			dir: {},
			configuracion: Item,
			minicolorsCustomSettings: recursos.minicolors_predeterminado,
		});
		//Cargando datos
		configuracionModel.getAll().success(function(e){ 
			$scope.configuracion.estilo_consola_principal_fondo_color 	= e.data.estilo_consola_principal_fondo_color;
			$scope.configuracion.estilo_consola_principal_texto_color 	= e.data.estilo_consola_principal_texto_color;
			$scope.configuracion.estilo_consola_secundario_fondo_color 	= e.data.estilo_consola_secundario_fondo_color;
			$scope.configuracion.estilo_consola_secundario_texto_color 	= e.data.estilo_consola_secundario_texto_color;
			//LOGO 1
			if(e.data.estilo_consola_logo1_archivo != null){
				$scope.dir.ec_logo1 	= e.data.estilo_consola_logo1_archivo.nombre_logico;
				$scope.dir.ec_logo1_id 	= e.data.estilo_consola_logo1_archivo.id;
			}else{
				$scope.dir.ec_logo1_id 	= null;
			}
			//LOGO 2
			if(e.data.estilo_consola_logo2_archivo != null){
				$scope.dir.ec_logo2 	= e.data.estilo_consola_logo2_archivo.nombre_logico;
				$scope.dir.ec_logo2_id 	= e.data.estilo_consola_logo1_archivo.id;
			}else{
				$scope.dir.ec_logo1_id 	= null;
			}
			//Mostrar el Ligthbox
			$scope.showModal 	= true;

		});
		//metodos
		angular.extend( $scope, {
			doConsola: function(nameForm){
				var logo1 = $scope.dir.file_logo1;
				var logo2 = $scope.dir.file_logo2;
				$scope.configuracion.estilo_consola_logo1_archivo = $scope.dir.ec_logo1_id;
				$scope.configuracion.estilo_consola_logo2_archivo = $scope.dir.ec_logo2_id; 

				$q.all(
					[
						upload.uploadFile(
							logo1, 
							$scope.configuracion.estilo_consola_logo1_archivo
						).then(function(res){
							if(res.data.data.length > 0){
								$scope.configuracion.estilo_consola_logo1_archivo = res.data.data[0];
							}
						}),
						upload.uploadFile(
							logo2, 
							$scope.configuracion.estilo_consola_logo2_archivo
						).then(function(res){
							if(res.data.data.length > 0){
								$scope.configuracion.estilo_consola_logo2_archivo = res.data.data[0];
							}
						}),
					]
				).then(function(){
					//console.log($scope.configuracion);
					configuracionModel.post($scope.configuracion).success(function(data){	
						console.log(data);
					});
				});
				
			},

			close: function(){
				$uibModalInstance.dismiss('cancel');
			}
		});
	
}]);