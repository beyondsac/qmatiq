@extends('layout')

@section('titulo')
	Qmatiq - Peticiones de acceso
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué <span class="fc_2bb673 h_47_LightC">Peticiones de acceso</span> has recibido?
				</h1>
				<div class="col-lg-11 col-md-11 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('configuracion.listados.peticiones_de_acceso')
							</div>
						</div>
						@include('configuracion.modales.peticiones_de_acceso')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
