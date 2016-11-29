//TODO: peticionesModel TODAVIA NO JALA LA DATA CORRECTA
qmatiq.controller('peticionesDeAccesoModal', ['$scope', '$rootScope', '$http', 'peticionesModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, $http, peticionesModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {},
			composeEmail: {}
		});

		//Acciones disponibles en "Seleccionar acción"
		$scope.acciones = [{
			value: 'aceptada',
			label: 'Aceptar petición',
			selected: 'selected'
		}, {
			value: 'rechazada',
			label: 'Rechazar petición'
		}];
		$scope.listaAcciones = $scope.acciones[0];//Acetar petición aparecerá como preseleccionado

		//Instanciando variables
		//$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		//$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		//$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doPeticiones: function(peticionesForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*
				var data={
					seguridad_codigo_autenticacion_tipo: $scope.configuraciones.seguridad_codigo_autenticacion_tipo,
					seguridad_codigo_autenticacion_dias: $scope.configuraciones.seguridad_codigo_autenticacion_dias,
					seguridad_codigo_autenticacion_fecha: $scope.configuraciones.seguridad_codigo_autenticacion_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_autenticacion_tipo = $scope.configuraciones.seguridad_codigo_autenticacion_tipo;
				Item.seguridad_codigo_autenticacion_dias = $scope.configuraciones.seguridad_codigo_autenticacion_dias;
				Item.seguridad_codigo_autenticacion_fecha = $scope.configuraciones.seguridad_codigo_autenticacion_fecha;
				//Actualizo la nueva configuración en el API
				peticionesModel.post(data).success(function(respuesta){*/
					//console.log(respuesta);

					//Seteo de variables de correo
					var name = "Ricardo Echecopar";
					var to = "holmestreepartnersllc@gmail.com";
					var subject = "Su petición de acceso a Qmatiq Console ha sido " + $scope.listaAcciones.value;
					var adm = "echecopar@piensamasalla.com";

					var eSaludo;
					var eContenido;
					var eComentario;
					var eAccion;
					var eDespedida;
					var eCierre;

					if ($scope.listaAcciones.value == "aceptada") {
						eSaludo = "Hola " + name + ",";
						eContenido = "Tu petición para ingresar a Qmatiq Console ha sido aceptada por el administrador";
						eAccion = "Ingresar a Qmatiq";
						eDespedida = "Recuerda que para ingresar al sistema necesitarás tu usuario, contraseña y código de autenticación.";
						eCierre = "Gracias por esperar.";
					}else{
						eSaludo = "Hola " + name + ",";
						eContenido = "Hemos detectado un intento de ingresar a Qmatiq con tu cuenta desde una dirección desconocida. Esta petición no autorizada ha sido rechazada";
						eAccion = "";
						eDespedida = "Por favor contáctate con el administrador si necesitas mayor información.";
						//eDespedida = "Por favor contáctate con el <a href='mailto:{{ $data->adm }}?subject=Acceso a Qmatiq Console' style='text-decoration: underline;'>administrador</a> si necesitas mayor información.";
						eCierre = "Equipo Qmatiq";
					}

					if ($scope.composeEmail.body == undefined) {
						$scope.composeEmail.body = "";
						eComentario = ".";
					}else{
						eComentario = " con el siguiente comentario:";
					}

					$scope.composeEmail = {
						'name': name,
						'to': to,
						'subject': subject,
						'body': $scope.composeEmail.body,
						'status': $scope.listaAcciones.value,
						'adm': adm,
						'eSaludo': eSaludo,
						'eContenido': eContenido,
						'eComentario': eComentario,
						'eAccion': eAccion,
						'eDespedida': eDespedida,
						'eCierre': eCierre
					};
					//console.log($scope.composeEmail.to + "  " + $scope.composeEmail.subject + "  " + $scope.composeEmail.body);

				   	$http({
						headers: {
							//'Content-Type': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
							//'Accept': 'application/json',
							//'x-csrf-token': constante.CSRF_TOKEN
						},
						url : 'http://localhost/qmatiq/public/enviarCorreo',
						method : 'POST',
						data : $scope.composeEmail
					});/*.success(function(respuesta){
						console.log(respuesta);
					}).error(function(err){
						console.log(err);
					});*/

					//Envío de correo con aplicación seleccionada
					/*var link = "mailto:"+ $scope.composeEmail.to
				             + "?subject=" + $scope.composeEmail.subject
				             + "&body=" + $scope.composeEmail.body; 
				    window.location.href = link;*/

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var tipo;
					var mensaje;
					if ($scope.listaAcciones.value == "aceptada") {
						tipo = "alert-success";
						mensaje = "Petición de acceso aceptada";
					} else {
						tipo = "alert-danger";
						mensaje = "Petición de acceso rechazada";
					}
					$rootScope.$broadcast('mostrar-alerta', tipo, mensaje);
					$uibModalInstance.dismiss('cancel');
				/*});
				*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);