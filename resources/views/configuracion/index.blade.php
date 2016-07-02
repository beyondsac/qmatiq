@extends('layout')

@section('titulo')
	Qmatiq - Configuración
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-8 col-md-8 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mb_0 mt_30">
					<span class="fc_2bb673 h_47_LightC">Configura</span> los aspectos generales del sistema
				</h1>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('roles') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-sitemap fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('roles') }}">
											Roles <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Administra los roles que requiera<br>
										tu organización para atender la<br>
										administración de colas.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('usuarios') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-users fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('usuarios') }}">
											Usuarios <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Agrega, elimina o edita a los<br>
										usuarios que serán responsables<br>
										de administrar el sistema.
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
									<a href="{{ route('logica_de_kioscos') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-plug fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0 pr_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('logica_de_kioscos') }}">
											Lógica de Kioscos <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Establece qué mecanismos de<br>
										lectura utilizarán los visitantes al<br>
										identificarse en los kioscos.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('estilos') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-picture-o fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('estilos') }}">
											Estilos <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Modifica algunas caracteristicas<br>
										para personalizar las aplicaciones<br>
										Qmatiq al estilo de tu empresa.
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
									<a href="{{ route('seguridad') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-shield fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('seguridad') }}">
											Seguridad <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Configura la frecuencia de envio<br>
										de códigos de autenticación y<br>
										otros aspectos de seguridad.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('peticiones_de_acceso') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-key fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0 w_230">
										<a href="{{ route('peticiones_de_acceso') }}">
											Peticiones de acceso <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Lista de códigos de autenticación y<br>
										contraseñas solicitadas desde<br>
										direcciones desconocidas.
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