<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(){
    	return view('configuracion.index');
    }

    public function roles(){
    	return view('configuracion.roles');
    }

    public function usuarios(){
    	return view('configuracion.usuarios');
    }

    public function logica_de_kioscos(){
    	return view('configuracion.logica_de_kioscos');
    }

    public function estilos(){
        return view('configuracion.estilos');
    }

    public function peticiones_de_acceso(){
        return view('configuracion.peticiones_de_acceso');
    }

    public function seguridad(){
        return view('configuracion.seguridad');
    }
}
