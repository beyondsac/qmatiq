<div id="modal_estilos_2" class="modal fade" role="dialog">
	<div class="pull-right modal-predeterminado">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<div class="fc_7fd0d9 h_Cond fs_16">Editar estilos para los kioscos</div>
			</div>
			<div class="modal-body">
				<div class="overflow">
					<div class="pull-right h_47_LightC fs_15">
						Restablecer <i class="fa fa-undo"></i>
					</div>
				</div>
				<div class="overflow">
					<ul class="nav nav-tabs h_Cond fs_16 tab_predeterminado tab_estilos" role="tablist">
						<li role="presentation" class="active">
							<a href="#estilos_bienvenida_imagenes" aria-controls="estilos_bienvenida_imagenes" role="tab" data-toggle="tab">Imágenes</a>
						</li>
						<li role="presentation">
							<a href="#estilos_bienvenida_textos" aria-controls="estilos_bienvenida_textos" role="tab" data-toggle="tab">Textos</a>
						</li>
						<li role="presentation">
							<a href="#estilos_bienvenida_botones" aria-controls="estilos_bienvenida_botones" role="tab" data-toggle="tab">Botones</a>
						</li>
						<li role="presentation">
							<a href="#estilos_bienvenida_boton_ticket" aria-controls="estilos_bienvenida_boton_ticket" role="tab" data-toggle="tab">Botón ticket</a>
						</li>
						<li role="presentation">
							<a href="#estilos_bienvenida_mensajes" aria-controls="estilos_bienvenida_mensajes" role="tab" data-toggle="tab">Mensajes</a>
						</li>
					</ul>
					  <!-- Tab panes -->
					<div class="tab-content">
					    <div role="tabpanel" class="tab-pane active" id="estilos_bienvenida_imagenes">
					    	@include('configuracion.modales.bienvenida.imagenes')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_bienvenida_textos">
					    	@include('configuracion.modales.bienvenida.textos')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_bienvenida_botones">
					    	@include('configuracion.modales.bienvenida.botones')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_bienvenida_boton_ticket">
					    	@include('configuracion.modales.bienvenida.boton_ticket')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_bienvenida_mensajes">
					    	@include('configuracion.modales.bienvenida.mensajes')
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>