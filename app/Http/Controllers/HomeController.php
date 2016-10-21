<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller {
	public function index() {

		$postdata = file_get_contents("php://input");
		$data = json_decode($postdata);

		/*$name = $data->name;
		$to = $data->to;
		$subject = $data->subject;
		$body = $data->body;*/

		if ($data->status == "aceptada") {
			Mail::send('emailPeticionAceptada', ['data' => $data], function ($m) use ($data) {
		        //$m->from('rechecoparc@gmail.com', 'Your Application');
		        $m->subject($data->subject);
		        $m->to($data->to, $data->name);
		        //$m->setBody($data->body);
    		});
		}else{
			Mail::send('emailPeticionRechazada', ['data' => $data], function ($m) use ($data) {
		        //$m->from('rechecoparc@gmail.com', 'Your Application');
		        $m->subject($data->subject);
		        $m->to($data->to, $data->name);
		        //$m->setBody($data->body);
    		});
		}

		
	}
}
