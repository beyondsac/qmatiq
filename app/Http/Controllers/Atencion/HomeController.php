<?php

namespace App\Http\Controllers\Atencion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(){
    	return view('atencion.index');
    }

    public function modulo_de_atencion(){
        return view('atencion.modulo_de_atencion');
    }

    public function criterios_de_atencion(){
    	return view('atencion.criterios_de_atencion');
    }

    public function supervision(){
    	return view('atencion.supervision');
    }

    public function mensajes_de_alerta(){
    	return view('atencion.mensajes_de_alerta');
    }
}
