@extends('layout')

@section('titulo')
	Qmatiq - Clientes y jerarquías
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Cuáles son tus <span class="fc_2bb673 h_47_LightC">Clientes y Jerarquías</span>?
				</h1>
				<div class="col-lg-5 col-md-6 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<ul class="nav nav-tabs h_Cond fs_16 tab_predeterminado" role="tablist">
									<li role="presentation" class="active">
										<a href="#tab_cliente" aria-controls="tab_cliente" role="tab" data-toggle="tab">Clientes</a>
									</li>
								    <li role="presentation">
								    	<a href="#tab_jerarquia" aria-controls="tab_jerarquia" role="tab" data-toggle="tab">Jerarquías</a>
								    </li>
								    <li role="presentation">
								    	<a href="#tab_importar" aria-controls="tab_importar" role="tab" data-toggle="tab">Importar datos</a>
								    </li>
								</ul>
								  <!-- Tab panes -->
								<div class="tab-content">
								    <div role="tabpanel" class="tab-pane active" id="tab_cliente">
										@include('planificacion.listados.clientes')
								    </div>
								    <div role="tabpanel" class="tab-pane" id="tab_jerarquia">
										@include('planificacion.listados.jerarquias')
								    </div>
								    <div role="tabpanel" class="tab-pane" id="tab_importar">
										@include('planificacion.secuencia.paso_3')
								    </div>
								 </div>
							</div>
						</div>
						@include('planificacion.modales.clientes')
						@include('planificacion.modales.jerarquias')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
