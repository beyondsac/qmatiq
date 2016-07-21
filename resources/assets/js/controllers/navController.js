qmatiq.controller('navController', ['$scope', '$location', function($scope, $location){
	//variables
	angular.extend($scope, {
		navUrl: [
			{
				url: '/configuracion',
				ico: '<i class="fa fa-gear"></i>',
				subMenu: [
					{
						link: 'Configuración',
						url: '/configuracion',
					},
					{
						link: 'Roles',
						url: '/configuracion/roles',
					},
					{
						link: 'Usuarios',
						url: '/configuracion/usuarios',
					},
					{
						link: 'Lógica de Kioscos',
						url: '/configuracion/logica_de_kioscos',
					},
					{
						link: 'Estilos',
						url: '/configuracion/estilos',
					},
					{
						link: 'Seguridad',
						url: '/configuracion/seguridad',
					},
					{
						link: 'Peticiones de acceso',
						ico: '<i class="fa fa-exclamation fc_ed7d7d"></i>',
						url: '/configuracion/peticiones_de_acceso',
					}
				]
			},
			{
				url: '/planificacion',
				ico: '<i class="fa fa-flask"></i>',
				subMenu: [
					{
						link: 'Planificación',
						url: '/planificacion',
					},
					{
						link: 'Locales / Kioscos',
						url: '/planificacion/locales_kioscos',
					},
					{
						link: 'Clientes y jerarquías',
						url: '/planificacion/clientes_y_jerarquias',
					},
					{
						link: 'Grupos de atención',
						url: '/planificacion/grupos_de_atencion',
					},
					{
						link: 'Lógica',
						url: '/planificacion/logica',
					}
				]
			},
			{
				url: '/video',
				ico: '<i class="fa fa-film"></i>',
				subMenu: [
					{
						link: 'Video',
						url: '/video',
					},
					{
						link: 'Playlist locales',
						url: '/video/playlist_locales',
					},
					{
						link: 'Playlist de Youtube',
						url: '/video/playlist_de_youtube',
					}
				]
			},
			{
				url: '/atencion',
				ico: '<i class="fa fa-hand-o-right"></i>',
				subMenu: [
					{
						link: 'Atención',
						url: '/atencion',
					},
					{
						link: 'Módulo de atención',
						url: '/atencion/modulo_de_atencion',
					},
					{
						link: 'Supervisión',
						url: '/atencion/supervision',
					},
					{
						link: 'Criterios de atención',
						url: '/atencion/criterios_de_atencion',
					},
					{
						link: 'Mensajes de alerta',
						url: '/atencion/mensajes_de_alerta',
					}
				]
			},
			{
				url: '/reportes',
				ico: '<i class="fa fa-bar-chart"></i>',
				subMenu: [
					{
						link: 'Reportes',
						url: '/reportes',
					},
					{
						link: 'Alcance de turnos',
						url: '/reportes/alcance_de_turnos',
					},
					{
						link: 'Origen de los turnos',
						url: '/reportes/origen_de_los_turnos',
					},
					{
						link: 'Promedio de atención',
						url: '/reportes/promedio_de_atencion',
					},
					{
						link: 'Frecuencia por trámite',
						url: '/reportes/frecuencia_por_tramite',
					},
					{
						link: 'Saturación',
						url: '/reportes/saturacion',
					}
				]
			}
		]
	});
	//metodos
	angular.extend($scope, {
		ActiveLink: function(routeLink){
			if($location.path() == routeLink){
				return 'active';
			}
		},
		ActiveLinkPadre: function(link){
			var subMenu = $location.path().split('/',2);
			if( link == '/'+subMenu[1] ){
				return 'active_padre';
			}
		},
		LinkFirst : function(key){
			if(key == 0){
				return 'fs_18';
			}
		},
	});
}]);