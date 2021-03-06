@extends('layout')

@section('titulo')
	Qmatiq - Frecuencia por trámite
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Cuál es la <span class="fc_2bb673 h_47_LightC">Frecuencia</span> de atención por 
					<span class="fc_2bb673 h_47_LightC">Trámite</span>?
				</h1>
				<div class="col-lg-12 col-md-12 mt_10">
					<div class="borde_total">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="overflow mb_30 mt_20">
									<img src="{{ asset('img/reportes_frecuencia.jpg') }}" alt="" class="img-responsive">
								</div>
								<table class="table table-responsive table-default table-select">
									<thead class="h_Cond">
										<tr>
											<th class="borde_cabecera_tabla_azul w_40"></th>
											<th class="borde_cabecera_tabla_azul pl_0">Nombre del local</th>
											<th class="borde_cabecera_tabla text-center" style="color:#5aaf85;">(I)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#45a9c3;">(T)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#8e69d3;">(C)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#c262d0;">(M)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#e17777;">(A)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#e1ae6c;">(P)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#efe464;">(R)</th>
											<th class="borde_cabecera_tabla text-center" style="color:#ccd0d1;">(N)</th>
											<th class="borde_cabecera_tabla text-center fc_7fd0d9">Total</th>
											<th class="borde_cabecera_tabla"></th>
										</tr>
									</thead>
									<tbody class="h_47_LightC fc_687a8b fs_15">
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Benavides</td>
											<th class="text-center">17,658</th>
											<th class="text-center">9,112</th>
											<th class="text-center">5,845</th>
											<th class="text-center">4,946</th>
											<th class="text-center">3,845</th>
											<th class="text-center">2,856</th>
											<th class="text-center">1,589</th>
											<th class="text-center">1,184</th>
											<th class="text-center">44,786</th>
											<td class="text-center"></td>
										</tr>
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Angamos</td>
											<th class="text-center">17,658</th>
											<th class="text-center">11,652</th>
											<th class="text-center">5,542</th>
											<th class="text-center">5,175</th>
											<th class="text-center">3,956</th>
											<th class="text-center">2,985</th>
											<th class="text-center">1,758</th>
											<th class="text-center">1,274</th>
											<th class="text-center">46,125</th>
											<td class="text-center"></td>
										</tr>
										<tr>											
											<td class="w_40"></td>
											<td class="pl_0">Javier Prado</td>
											<th class="text-center">17,658</th>
											<th class="text-center">12,845</th>
											<th class="text-center">5,195</th>
											<th class="text-center">5,856</th>
											<th class="text-center">4,153</th>
											<th class="text-center">3,002</th>
											<th class="text-center">1,487</th>
											<th class="text-center">1,067</th>
											<th class="text-center">47,136</th>
											<td class="text-center"></td>
										</tr>
										<tr class="bold">											
											<td class="w_40"></td>
											<td class="pl_0">Total</td>
											<th class="text-center">17,658</th>
											<th class="text-center">32,854</th>
											<th class="text-center">15,845</th>
											<th class="text-center">15,367</th>
											<th class="text-center">10,875</th>
											<th class="text-center">9,056</th>
											<th class="text-center">4,886</th>
											<th class="text-center">3,341</th>
											<th class="text-center">135,951</th>
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
