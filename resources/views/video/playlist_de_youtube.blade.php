@extends('layout')

@section('titulo')
	Qmatiq - Playlist de Youtube
@endsection

@section('content')
	<div class="container-fluid p_0">
		<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
			<div class="row">
				<h1 class="fs_33 h_37_ThinC mt_30">
					¿Qué <span class="fc_2bb673 h_47_LightC">Playlist</span> deseas reproducir desde Youtube?
				</h1>
				<div class="col-lg-5 col-md-6 mt_10">
					<div class="borde_total">
						<div class="pull-right">
							<button type="button" class="button" data-toggle='modal' data-target="#modal_playlist_youtube" data-dismiss="modal">
								<span class="h_47_LightC fs_15 fc_687a8b agregar">Agregar playlist</span>
								<i class="fa fa-plus-circle fc_2bb673 fs_23"></i>
							</button>
						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12">
								@include('video.listados.playlist_de_youtube')
							</div>
						</div>
						@include('video.modales.playlist_de_youtube')
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection