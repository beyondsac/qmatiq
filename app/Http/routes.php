<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//AngularJS
Route::get('/', function(){
	return view('layout');
});
/*

// Home 
Route::get('login', ['uses' => 'HomeController@login','as' => 'login']);
Route::get('/', ['uses' => 'HomeController@index','as' => 'home']);
// Configuracion
Route::get('configuracion', 					['uses' => 'Configuracion\HomeController@index','as' => 'configuracion']);
Route::get('configuracion/roles', 				['uses' => 'Configuracion\HomeController@roles','as' => 'roles']);
Route::get('configuracion/usuarios', 			['uses' => 'Configuracion\HomeController@usuarios','as' => 'usuarios']);
Route::get('configuracion/logica_de_kioscos', 	['uses' => 'Configuracion\HomeController@logica_de_kioscos','as' => 'logica_de_kioscos']);
Route::get('configuracion/estilos', 			['uses' => 'Configuracion\HomeController@estilos','as' => 'estilos']);
Route::get('configuracion/seguridad', 			['uses' => 'Configuracion\HomeController@seguridad','as' => 'seguridad']);
Route::get('configuracion/peticiones_de_acceso',['uses' => 'Configuracion\HomeController@peticiones_de_acceso','as' => 'peticiones_de_acceso']);
// Planificacion
Route::get('planificacion', 					['uses' => 'Planificacion\HomeController@index','as' => 'planificacion']);
Route::get('planificacion/grupo_de_atencion', 	['uses' => 'Planificacion\HomeController@grupo_de_atencion','as' => 'grupo_de_atencion']);
Route::get('planificacion/clientes_y_jerarquias', ['uses' => 'Planificacion\HomeController@clientes_y_jerarquias','as' => 'clientes_y_jerarquias']);
Route::get('planificacion/locales_kioscos', 	['uses' => 'Planificacion\HomeController@locales_kioscos','as' => 'locales_kioscos']);
Route::get('planificacion/logica', 				['uses' => 'Planificacion\HomeController@logica','as' => 'logica']);
// Video
Route::get('video', 							['uses' => 'Video\HomeController@index','as' => 'video']);
Route::get('video/playlist_locales', 			['uses' => 'Video\HomeController@playlist_locales','as' => 'playlist_locales']);
Route::get('video/playlist_de_youtube', 		['uses' => 'Video\HomeController@playlist_de_youtube','as' => 'playlist_de_youtube']);
// Atencion
Route::get('atencion', 							['uses' => 'Atencion\HomeController@index','as' => 'atencion']);
Route::get('atencion/modulo_de_atencion', 		['uses' => 'Atencion\HomeController@modulo_de_atencion','as' => 'modulo_de_atencion']);
Route::get('atencion/supervision', 				['uses' => 'Atencion\HomeController@supervision','as' => 'supervision']);
Route::get('atencion/criterios_de_atencion', 	['uses' => 'Atencion\HomeController@criterios_de_atencion','as' => 'criterios_de_atencion']);
Route::get('atencion/mensajes_de_alerta', 		['uses' => 'Atencion\HomeController@mensajes_de_alerta','as' => 'mensajes_de_alerta']);
// Reportes
Route::get('reportes', 							['uses' => 'Reportes\HomeController@index','as' => 'reportes']);
Route::get('reportes/alcance_de_turnos', 		['uses' => 'Reportes\HomeController@alcance','as' => 'alcance_de_turnos']);
Route::get('reportes/origen_de_turnos', 		['uses' => 'Reportes\HomeController@origen','as' => 'origen_de_turnos']);
Route::get('reportes/promedio_de_atencion',	 	['uses' => 'Reportes\HomeController@promedio','as' => 'promedio_de_atencion']);
Route::get('reportes/frecuencia_por_tramite', 	['uses' => 'Reportes\HomeController@frecuencia','as' => 'frecuencia_por_tramite']);
Route::get('reportes/saturacion', 				['uses' => 'Reportes\HomeController@saturacion','as' => 'saturacion']);

*/