<div id="modal_estilos_5" class="modal fade" role="dialog">
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
							<a href="#estilos_menu_administracion_imagenes" aria-controls="estilos_menu_administracion_imagenes" role="tab" data-toggle="tab">Imágenes</a>
						</li>
						<li role="presentation">
							<a href="#estilos_menu_administracion_botones" aria-controls="estilos_menu_administracion_botones" role="tab" data-toggle="tab">Botones</a>
						</li>
						<li role="presentation">
							<a href="#estilos_menu_administracion_mensaje" aria-controls="estilos_menu_administracion_mensaje" role="tab" data-toggle="tab">Mensaje</a>
						</li>
						<li role="presentation">
							<a href="#estilos_menu_administracion_admin" aria-controls="estilos_menu_administracion_admin" role="tab" data-toggle="tab">Administración</a>
						</li>
					</ul>
					  <!-- Tab panes -->
					<div class="tab-content">
					    <div role="tabpanel" class="tab-pane active" id="estilos_menu_administracion_imagenes">
					    	@include('configuracion.modales.menu_administracion.imagenes')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_menu_administracion_botones">
					    	@include('configuracion.modales.menu_administracion.botones')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_menu_administracion_mensaje">
					    	@include('configuracion.modales.menu_administracion.mensaje')
					    </div>
					    <div role="tabpanel" class="tab-pane" id="estilos_menu_administracion_admin">
					    	@include('configuracion.modales.menu_administracion.administracion')
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>