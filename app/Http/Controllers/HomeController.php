<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends Controller
{
	public function login(){
		return view('home.login');
	}

	public function index(){
		return view('home.index');
	}
}
