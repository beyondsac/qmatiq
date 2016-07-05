<?php

namespace App\Http\Controllers\Reportes;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(){
    	return view('reportes.index');
    }

    public function alcance(){
    	return view('reportes.alcance');
    }

    public function origen(){
    	return view('reportes.origen');
    }

    public function promedio(){
    	return view('reportes.promedio');
    }

    public function frecuencia(){
    	return view('reportes.frecuencia');
    }

    public function saturacion(){
    	return view('reportes.saturacion');
    }
}
