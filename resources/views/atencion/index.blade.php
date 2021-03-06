@extends('layout')

@section('titulo')
	Qmatiq - Configuración
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-8 col-md-8 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mb_0 mt_30">
					<span class="fc_2bb673 h_47_LightC">Atiende</span> a tus clientes con facilidad
				</h1>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('modulo_de_atencion') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-hand-o-right fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0 w_230">
										<a href="{{ route('modulo_de_atencion') }}">
											Módulo de atención <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Utiliza nuestras herramientas para<br>
										simplificar la atención y reducir el<br>
										tiempo de espera.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5 text-right">
									<a href="{{ route('supervision') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-check-square-o fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('supervision') }}">
											Supervisión <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Monitorea la actividad y<br>
										desempeño de los usuarios en<br>
										cada puesto de atención.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('criterios_de_atencion') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-inbox fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0 ml_m5">
									<h2 class="h_37_ThinC fs_29 m_0 w_230">
										<a href="{{ route('criterios_de_atencion') }}">
											Criterios de atención <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Lista los tipos de trámite o<br>
										solicitudes requeridas por tus<br>
										clientes durante su atención.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5 text-right">
									<a href="{{ route('mensajes_de_alerta') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-envelope-o fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 ml_m5">
									<h2 class="h_37_ThinC fs_29 m_0 w_230">
										<a href="{{ route('mensajes_de_alerta') }}">
											Mensajes de alerta <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Crea y publica mensajes para ser<br>
										leídos por tus clientes en el<br>
										kiosco y en la aplicación móvil.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection