@extends('layout')

@section('titulo')
	Qmatiq - Home
@endsection

@section('pagina')
	<div class="fondo_logeo">
		<div class="logeo">		
			<img src="{{ asset('img/login/logo.png') }}" alt="">
			<div class="overflow mt_30 fs_20 h_47_Light_C text-left pl_15">
				<div class="overflow mb_5">
					<i class="fa fa-user fc_ffffff w_20"></i>
					<input type="text" class="input_blanco fs_15" placeholder="Usuario">
				</div>
				<div class="overflow mb_5">
					<i class="fa fa-lock fc_ffffff w_20"></i>
					<input type="text" class="input_blanco fs_15" placeholder="Contraseña">
				</div>
				<div class="overflow">
					<i class="fa fa-shield fc_ffffff w_20"></i>
					<input type="text" class="input_blanco fs_15 codigo_autenticidad" placeholder="Código de autenticidad">
					<button type="submit" class="button btn_logeo">
						<i class="fa fa-arrow-circle-right fc_2bb673 fs_35"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
@endsection
