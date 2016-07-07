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
    /*
    mix.sass([
        'app.scss',
        'font.scss',
        'global.scss']);

    mix.scripts([
        //Librerias
        './node_modules/jquery/jquery.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    	'./public/bower_components/angular/angular.min.js',
    	'./public/bower_components/angular-route/angular-route.min.js',
    	'./public/bower_components/angular-cookies/angular-cookies.min.js',
        //Jquery
    	'global.js',
    	],'public/js/lib.js');
    */

    //AngularJS
    mix.scripts([
        'app.js',
        ],'public/js/app.js');

    mix.scripts([
        'controllers/userController.js',
        ],'public/js/controllers.js');

    mix.scripts([
        'models/userModel.js',
        ],'public/js/models.js');

    mix.version([
        'js/lib.js',
        'js/app.js',
        'js/models.js',
        'js/controllers.js']);
});
