@extends('layout')

@section('titulo')
	Qmatiq - Estilos
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué <span class="fc_2bb673 h_47_LightC">Estilos</span> usas en tus aplicaciones?
				</h1>
				<div class="col-lg-5 col-md-6 mt_30">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('configuracion.listados.estilos')
							</div>
						</div>
						@include('configuracion.modales.estilos_consola')
						@include('configuracion.modales.estilos_bienvenida')
						@include('configuracion.modales.estilos_identificacion')
						@include('configuracion.modales.estilos_escaneos')
						@include('configuracion.modales.estilos_menu_administracion')
						@include('configuracion.modales.estilos_video')
						@include('configuracion.modales.estilos_mobile')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
