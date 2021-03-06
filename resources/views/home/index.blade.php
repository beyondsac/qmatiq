@extends('layout')

@section('titulo')
	Qmatiq - Home
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-8 col-md-8 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mb_0 mt_30">
					<span class="fc_2bb673 h_47_LightC">Bienvenido</span> a Qmatiq Console
				</h1>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('configuracion') }}">
										<div class="circulo text-center">
											<i class="fa fa-gear fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('configuracion') }}">
											Configuración <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Administra los roles, usuarios,<br>
										estilos y la configuración de<br>
										seguridad de las aplicaciones.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('planificacion') }}">
										<div class="circulo text-center">
											<i class="fa fa-flask fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('planificacion') }}">
											Planificación <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Define los locales, puntos de <br>
										atención, jerarquías, criterios y<br>
										lógica a utilizar en la atención.
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
									<a href="{{ route('video') }}">
										<div class="circulo text-center">
											<i class="fa fa-film fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('video') }}">
											Video <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Organiza los videos que deseas<br>
										mostrar a tus clientes en las<br>
										pantallas de tus locales.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('atencion') }}">
										<div class="circulo text-center">
											<i class="fa fa-hand-o-right fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('atencion') }}">
											Atención <i class="fa fa-angle-right"></i>
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
					</div>
				</div>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('reportes') }}">
										<div class="circulo text-center">
											<i class="fa fa-bar-chart fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('reportes') }}">
											Reportes <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Utiliza poderosos filtros<br>
										estadísticos para monitorear la<br>
										actividad de tus clientes.
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