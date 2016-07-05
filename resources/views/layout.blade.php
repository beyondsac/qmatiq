
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>@yield('titulo')</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        @yield('css')
    </head>
    <body>
        @section('pagina')  
        <div class="row">
            <div class="container-fluid">
                <header>
                    <section>
                        <a href="{{ route('home') }}" class="logo center-block pull-left">
                            <img src="{{ asset('img/logo1.png')}}">
                        </a>
                    </section>
                    <section>
                        <a href="{{ route('home') }}" class="logo2 center-block pull-left">
                            <img src="{{ asset('img/logo2.png')}}">
                        </a>
                    </section>
                    <section class="profile">
                        <ul class="nav navbar-nav pull-right hidden-xs pr_15">
                            <li>
                                <span class="h_47_LightC fc_3fb8c6">Juan Perez</span>
                            </li>
                            <li>
                                <select name="idioma">
                                    <option value="ES">ES</option>
                                    <option value="EN">EN</option>
                                </select>
                            </li> 
                            <li>
                                <i class="fa fa-user"></i>
                            </li>
                            <li>
                                <i class="fa fa-question-circle"></i>
                            </li>
                        </ul>
                    </section>
                </header>
                <section>
                    <section class="sidebar pull-left">
                        <nav class="navbar">
                            <ul class="nav nav-sidebar text-center">
                                <li>
                                    <a href="{{ route('configuracion') }}">
                                        <i class="fa fa-gear"></i>
                                    </a>
                                    <ul class="nav nav-sidebar text-left h_47_LightC fs_15">
                                        <li @if( Route::is('configuracion') ) class="active" @endif>
                                            <a href="{{ route('configuracion') }}" class="fs_18">Configuración</a>
                                        </li>
                                        <li @if( Route::is('roles') ) class="active" @endif>
                                            <a href="{{ route('roles') }}">Roles</a>
                                        </li>
                                        <li @if( Route::is('usuarios') ) class="active" @endif>
                                            <a href="{{ route('usuarios') }}">Usuarios</a>
                                        </li>
                                        <li @if( Route::is('logica_de_kioscos') ) class="active" @endif>
                                            <a href="{{ route('logica_de_kioscos') }}">Lógica de Kioscos</a>
                                        </li>
                                        <li @if( Route::is('estilos') ) class="active" @endif>
                                            <a href="{{ route('estilos') }}">Estilos</a>
                                        </li>
                                        <li @if( Route::is('seguridad') ) class="active" @endif>
                                            <a href="{{ route('seguridad') }}">Seguridad</a>
                                        </li>
                                        <li @if( Route::is('peticiones_de_acceso') ) class="active" @endif>
                                            <a href="{{ route('peticiones_de_acceso') }}">
                                                Peticiones de acceso <i class="fa fa-exclamation fc_ed7d7d"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="{{ route('planificacion') }}">
                                        <i class="fa fa-flask"></i>
                                    </a>
                                    <ul class="nav nav-sidebar text-left h_47_LightC fs_15">
                                        <li @if( Route::is('planificacion') ) class="active" @endif>
                                            <a href="{{ route('planificacion') }}" class="fs_18">Planificación</a>
                                        </li>
                                        <li @if( Route::is('locales_kioscos') ) class="active" @endif>
                                            <a href="{{ route('locales_kioscos') }}">Locales / Kioscos</a>
                                        </li>
                                        <li @if( Route::is('clientes_y_jerarquias') ) class="active" @endif>
                                            <a href="{{ route('clientes_y_jerarquias') }}">Clientes y jerarquías</a>
                                        </li>
                                        <li @if( Route::is('grupo_de_atencion') ) class="active" @endif>
                                            <a href="{{ route('grupo_de_atencion') }}">Grupos de atención</a>
                                        </li>
                                        <li @if( Route::is('logica') ) class="active" @endif>
                                            <a href="{{ route('logica') }}">Lógica</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="{{ route('video') }}">
                                        <i class="fa fa-film"></i>
                                    </a>
                                    <ul class="nav nav-sidebar text-left h_47_LightC fs_15">
                                        <li @if( Route::is('video') ) class="active" @endif>
                                            <a href="{{ route('video') }}" class="fs_18">Video</a>
                                        </li>
                                        <li @if( Route::is('playlist_locales') ) class="active" @endif>
                                            <a href="{{ route('playlist_locales') }}">Playlist locales</a>
                                        </li>
                                        <li @if( Route::is('playlist_de_youtube') ) class="active" @endif>
                                            <a href="{{ route('playlist_de_youtube') }}">Playlist de Youtube</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="{{ route('atencion') }}">
                                        <i class="fa fa-hand-o-right"></i>
                                    </a>
                                    <ul class="nav nav-sidebar text-left h_47_LightC fs_15">
                                        <li @if( Route::is('atencion') ) class="active" @endif>
                                            <a href="{{ route('atencion') }}" class="fs_18">Atención</a>
                                        </li>
                                        <li @if( Route::is('modulo_de_atencion') ) class="active" @endif>
                                            <a href="{{ route('modulo_de_atencion') }}">Módulo de atención</a>
                                        </li>
                                        <li @if( Route::is('supervision') ) class="active" @endif>
                                            <a href="{{ route('supervision') }}">Supervisión</a>
                                        </li>
                                        <li @if( Route::is('criterios_de_atencion') ) class="active" @endif>
                                            <a href="{{ route('criterios_de_atencion') }}">Criterios de atención</a>
                                        </li>
                                        <li @if( Route::is('mensajes_de_alerta') ) class="active" @endif>
                                            <a href="{{ route('mensajes_de_alerta') }}">Mensajes de alerta</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="{{ route('reportes') }}">
                                        <i class="fa fa-bar-chart"></i>
                                    </a>
                                    <ul class="nav nav-sidebar text-left h_47_LightC fs_15">
                                        <li @if( Route::is('reportes') ) class="active" @endif>
                                            <a href="{{ route('reportes') }}" class="fs_18">Reportes</a>
                                        </li>
                                        <li @if( Route::is('alcance_de_turnos') ) class="active" @endif>
                                            <a href="{{ route('alcance_de_turnos') }}">Alcance de turnos</a>
                                        </li>
                                        <li @if( Route::is('origen_de_turnos') ) class="active" @endif>
                                            <a href="{{ route('origen_de_turnos') }}">Origen de los turnos</a>
                                        </li>
                                        <li @if( Route::is('promedio_de_atencion') ) class="active" @endif>
                                            <a href="{{ route('promedio_de_atencion') }}">Promedio de atención</a>
                                        </li>
                                        <li @if( Route::is('frecuencia_por_tramite') ) class="active" @endif>
                                            <a href="{{ route('frecuencia_por_tramite') }}">Frecuencia por trámite</a>
                                        </li>
                                        <li @if( Route::is('saturacion') ) class="active" @endif>
                                            <a href="{{ route('saturacion') }}">Saturación</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section class="content">
                        <div class="franja_top"></div>
                        <div class="contenido">
                            @yield('content')
                        </div>
                        <div class="franja_bottom"></div>
                    </section>
                </section>
            </div>
        </div>
        @show
        <footer>
            <script src="{{ asset('js/lib.js') }}"></script>
        </footer>
    </body>
</html>
