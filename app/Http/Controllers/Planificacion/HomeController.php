<?php

namespace App\Http\Controllers\Planificacion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(){
    	return view('planificacion.index');
    }

    public function clientes_y_jerarquias(){
        return view('planificacion.clientes_y_jerarquias');
    }

    public function grupo_de_atencion(){
    	return view('planificacion.grupo_de_atencion');
    }

    public function locales_kioscos(){
    	return view('planificacion.locales_kioscos');
    }

    public function logica(){
    	return view('planificacion.logica');
    }
}
