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
        //'./public/bower_components/angular-animate/angular-animate.min.js',
        './public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        //Jquery
    	//'global.js',
    	],'public/js/lib.js');
    
    //AngularJS
    mix.scripts([
        'app.js',
        ],'public/js/app.js');

    /*mix.scripts([
        'services/apiService.js',
        ],'public/js/services.js');*/

    mix.scripts([
        'controllers/userController.js',
        'controllers/globalController.js',
        'controllers/headController.js',
        'controllers/navController.js',
        'controllers/rolesController.js',
        ],'public/js/controllers.js');

    mix.scripts([
        'controllers/modales/rolModal.js',
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
        'js/controllers.js']);
});
