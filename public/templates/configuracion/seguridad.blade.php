@extends('layout')

@section('titulo')
	Qmatiq - Seguridad
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué configuración de <span class="fc_2bb673 h_47_LightC">Seguridad</span> utilizarás?
				</h1>
				<div class="col-lg-11 col-md-7 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('configuracion.listados.seguridad')
							</div>
						</div>
						@include('configuracion.modales.seguridad')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
