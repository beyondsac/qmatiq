@extends('layout')

@section('titulo')
	Qmatiq - Configuración
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-8 col-md-8 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mb_0 mt_30">
					Administra <span class="fc_2bb673 h_47_LightC">Videos</span> desde tu servidor o canal en Internet
				</h1>
				<div class="categorias_qmatiq">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('playlist_locales') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-video-camera fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('playlist_locales') }}" class="fc_596a7a">
											Playlists locales <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Administra y configura las listas<br>
										de reproducción de los videos<br>
										alojados en tu propio servidor.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="row">
								<div class="col-lg-4 col-md-5">
									<a href="{{ route('playlist_de_youtube') }}">
										<div class="circulo circulo_gris text-center">
											<i class="fa fa-youtube-play fs_55"></i>
										</div>
									</a>
								</div>
								<div class="col-lg-7 col-md-7 mt_7 p_0">
									<h2 class="h_37_ThinC fs_29 m_0">
										<a href="{{ route('playlist_de_youtube') }}" class="fc_596a7a">
											Playlists <i class="fa fa-angle-right"></i>
										</a>
									</h2>
									<p class="h_47_LightC fs_15 m_0">
										Configura el código para la<br>
										embebido o inserción del Playlist<br>
										desde tu canal de Youtube.
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