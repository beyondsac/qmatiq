$(document).ready(function($) {
	/* llamando al modal para las ediciones*/
	$('.table-select tbody tr').click(function() {
		$('.modales').modal();
	});
	/* activando modales de jerarquia */
	modal_view('.table-clientes tbody tr','#modal_clientes','#modal_jerarquias');
	modal_view('.table-jerarquias tbody tr','#modal_jerarquias','#modal_clientes');
	/* activando modales de estilos */
	modal_view('.estilos_1','#modal_estilos_1','#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_view('.estilos_2','#modal_estilos_2','#modal_estilos_1,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_view('.estilos_3','#modal_estilos_3','#modal_estilos_1,#modal_estilos_2,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_view('.estilos_4','#modal_estilos_4','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_view('.estilos_5','#modal_estilos_5','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_6,#modal_estilos_7');
	modal_view('.estilos_6','#modal_estilos_6','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_7');
	modal_view('.estilos_7','#modal_estilos_7','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6');
});

function modal_view(tabla,modal_show,modal_hide){
	$(tabla).click(function() {		
		$(modal_show).modal('show');
		$(modal_hide).modal('hide');
	});
}