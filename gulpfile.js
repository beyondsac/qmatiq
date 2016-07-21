var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    
    mix.sass([
        'app.scss',
        'font.scss',
        'global.scss']);

    mix.scripts([
        //Librerias
        './public/bower_components/jquery/dist/jquery.min.js',
    	'./public/bower_components/angular/angular.min.js',
    	'./public/bower_components/angular-route/angular-route.min.js',
        './public/bower_components/angular-resource/angular-resource.min.js',
    	'./public/bower_components/angular-cookies/angular-cookies.min.js',
        './public/bower_components/angular-sanitize/angular-sanitize.min.js',
        './public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        //Jquery
    	],'public/js/lib.js');
    
    //AngularJS
    mix.scripts([
        'app.js',
        ],'public/js/app.js');

    mix.scripts([
        'controllers/loginController.js',
        'controllers/globalController.js',
        'controllers/headController.js',
        'controllers/navController.js',
        'controllers/homeController.js',
        //configuracion
        'controllers/configuracion/configuracionController.js',
        'controllers/configuracion/rolesController.js',
        'controllers/configuracion/usuariosController.js',
        'controllers/configuracion/logicakioscosController.js',
        'controllers/configuracion/estilosController.js',
        'controllers/configuracion/seguridadController.js',
        'controllers/configuracion/peticionesController.js',
        //planificacion
        'controllers/planificacion/planificacionController.js',
        'controllers/planificacion/localeskioscosController.js',
        'controllers/planificacion/clientesController.js',
        'controllers/planificacion/gruposController.js',
        'controllers/planificacion/logicaController.js',
        //video
        'controllers/video/videoController.js',
        'controllers/video/playlocalesController.js',
        'controllers/video/playyoutubeController.js',
        //atencion
        'controllers/atencion/atencionController.js',
        'controllers/atencion/moduloController.js',
        'controllers/atencion/supervisionController.js',
        'controllers/atencion/criteriosController.js',
        'controllers/atencion/mensajesController.js',
        //reportes
        'controllers/reportes/reportesController.js',
        'controllers/reportes/alcanceController.js',
        'controllers/reportes/origenController.js',
        'controllers/reportes/promedioController.js',
        'controllers/reportes/frecuenciaController.js',
        'controllers/reportes/saturacionController.js',
        ],'public/js/controllers.js');

    mix.scripts([
        'controllers/modales/rolModal.js',
        //generales
        'controllers/modales/deleteModal.js',
        ],'public/js/modals.js');

    mix.scripts([
        'models/userModel.js',
        'models/rolModel.js',
        'models/moduloModel.js',
        ],'public/js/models.js');

    mix.version([
        'js/lib.js',
        'js/app.js',
        'js/models.js',
        'js/controllers.js',
        'js/modals.js',]);
});
