@extends('layout')

@section('titulo')
	Qmatiq - Locales / Kioscos
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué <span class="fc_2bb673 h_47_LightC">Locales</span> contarán con Qmatiq?
				</h1>
				<div class="col-lg-6 col-md-7 mt_10">
					<div class="borde_total">
						<div class="pull-right">
							<button type="button" class="button" data-toggle='modal' data-target="#modal_locales_kioscos" data-dismiss="modal">
								<span class="h_47_LightC fs_15 fc_687a8b agregar">Agregar local</span>
								<i class="fa fa-plus-circle fc_2bb673 fs_23"></i>
							</button>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('planificacion.listados.locales_kioscos')
							</div>
						</div>
						@include('planificacion.modales.locales_kioscos')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
