@extends('layout')

@section('titulo')
	Qmatiq - Locales / Kioscos
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué <span class="fc_2bb673 h_47_LightC">Lógica</span> utilizarás para la atención?
				</h1>
				<div class="col-lg-5 col-md-6 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('planificacion.listados.logica')
							</div>
						</div>
						@include('planificacion.modales.logica')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
