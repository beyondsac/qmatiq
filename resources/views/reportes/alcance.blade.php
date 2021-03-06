@extends('layout')

@section('titulo')
	Qmatiq - Alcance de turnos
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Cuál fue el <span class="fc_2bb673 h_47_LightC">Alcance</span> en la atención de 
					<span class="fc_2bb673 h_47_LightC">Turnos</span>?
				</h1>
				<div class="col-lg-12 col-md-12 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="overflow mb_30 mt_20">
									<img src="{{ asset('img/reportes_alcance.jpg') }}" alt="" class="img-responsive">
								</div>
								<table class="table table-responsive table-default table-select">
									<thead class="h_Cond">
										<tr>
											<th class="borde_cabecera_tabla_azul w_40"></th>
											<th class="borde_cabecera_tabla_azul pl_0">Nombre del local</th>
											<th class="borde_cabecera_tabla text-center fc_97bbcd">Turnos exitosos</th>
											<th class="borde_cabecera_tabla text-center fc_e1ae6c">Turnos incompletos</th>
											<th class="borde_cabecera_tabla text-center fc_e17777">Turnos vencidos</th>
											<th class="borde_cabecera_tabla text-center fc_7fd0d9">Total atenciones</th>
											<th class="borde_cabecera_tabla"></th>
										</tr>
									</thead>
									<tbody class="h_47_LightC fc_687a8b fs_15">
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Benavides</td>
											<td class="text-center">17,658</td>
											<td class="text-center">4,250</td>
											<td class="text-center">2,586</td>
											<td class="text-center">24,215</td>
											<td class="text-center"></td>
										</tr>
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Angamos</td>
											<td class="text-center">16,543</td>
											<td class="text-center">3,843</td>
											<td class="text-center">2,341</td>
											<td class="text-center">22,687</td>
											<td class="text-center"></td>
										</tr>
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Javier Prado</td>
											<td class="text-center">20,212</td>
											<td class="text-center">4,891</td>
											<td class="text-center">2,095</td>
											<td class="text-center">27,068</td>
											<td class="text-center"></td>
										</tr>
										<tr class="bold">											
											<td class="w_40"></td>
											<td class="pl_0">Total</td>
											<td class="text-center">56,542</td>
											<td class="text-center">12,562</td>
											<td class="text-center">6,874</td>
											<td class="text-center">73,851</td>
											<td class="text-center"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
