<div id="modal_estilos_7" class="modal fade" role="dialog">
	<div class="pull-right modal-predeterminado">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<div class="fc_7fd0d9 h_Cond fs_16">Editar estilos para la presentación de videos</div>
			</div>
			<div class="modal-body">
				<div class="overflow mb_10">
					<div class="pull-right h_47_LightC fs_15">
						Restablecer <i class="fa fa-undo"></i>
					</div>
				</div>
				<div class="overflow">
					<img src="{{ asset('img/estilos_mobile_cabecera.jpg')}}">
				</div>
				<div class="overflow">
					<ul class="nav nav-tabs h_Cond fs_16 tab_predeterminado" role="tablist">
						<li role="presentation" class="active">
							<a href="#tab_estilos_mobile_generales" aria-controls="tab_estilos_mobile_generales" role="tab" data-toggle="tab">Generales</a>
						</li>
					</ul>
					  <!-- Tab panes -->
					<div class="tab-content">
					    <div role="tabpanel" class="tab-pane active" id="tab_estilos_mobile_generales">
							@include('configuracion.modales.mobile.index')
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>