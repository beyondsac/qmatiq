<?php

namespace App\Http\Controllers\Video;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(){
    	return view('video.index');
    }

    public function playlist_locales(){
    	return view('video.playlist_locales');
    }

    public function playlist_de_youtube(){
    	return view('video.playlist_de_youtube');
    }
}
