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

    mix.styles([
        './public/css/app.css',
        //'./public/bower_components/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'
        './public/bower_components/jquery-minicolors/jquery.minicolors.css'
        ],'public/css/app.css');

    mix.scripts([
        //Librerias
        './public/bower_components/jquery/dist/jquery.min.js',
        './public/bower_components/jquery-minicolors/jquery.minicolors.min.js',
    	'./public/bower_components/angular/angular.min.js',
    	'./public/bower_components/angular-route/angular-route.min.js',
        './public/bower_components/angular-resource/angular-resource.min.js',
    	'./public/bower_components/angular-cookies/angular-cookies.min.js',
        './public/bower_components/angular-sanitize/angular-sanitize.min.js',
        './public/bower_components/angular-animate/angular-animate.min.js',
        './public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './public/bower_components/angular-minicolors/angular-minicolors.js',
        //'./public/bower_components/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
        //Jquery
    	],'public/js/lib.js');
    
    //AngularJS
    mix.scripts([
        'app.js',
        ],'public/js/app.js');
    //Controller
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
    //Modales
    mix.scripts([
        'controllers/modales/rolModal.js',
        'controllers/modales/usuarioModal.js',
        'controllers/modales/estiloConsolaModal.js',
        //generales
        'controllers/modales/deleteModal.js',
        ],'public/js/modals.js');
    //Models
    mix.scripts([
        'models/userModel.js',
        'models/rolModel.js',
        'models/usuarioModel.js',
        'models/localModel.js',
        'models/configuracionModel.js',
        'models/moduloModel.js',
        ],'public/js/models.js');
    //Services
    mix.scripts([
        'services/listServices.js',
        'services/recursos.js',
        'services/upload.js',
        ],'public/js/services.js');
    //Directives
    mix.scripts([
        'directives/uploaderModel.js',
        ],'public/js/directives.js');
    //Versiones
    mix.version([
        'js/lib.js',
        'js/app.js',
        'js/services.js',
        'js/directives.js',
        'js/models.js',
        'js/controllers.js',
        'js/modals.js',]);
});
