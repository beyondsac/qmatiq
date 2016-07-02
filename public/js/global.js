$(document).ready(function($) {
	/* activando bloque de menu y submenu */
	$('.sidebar .active').parent('ul').css({	display: 'block',	});
	$('.sidebar .active').parent('ul').parent('li').children('a').addClass('active');
	/* llamando al modal para las ediciones*/
	$('.table-select tbody tr').click(function() {
		$('.modales').modal();
	});
	/* activando modales de jerarquia */
	modal_jerarquias('.table-clientes tbody tr','#modal_clientes','#modal_jerarquias');
	modal_jerarquias('.table-jerarquias tbody tr','#modal_jerarquias','#modal_clientes');
	/* activando modales de estilos */
	modal_jerarquias('.estilos_1','#modal_estilos_1','#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_jerarquias('.estilos_2','#modal_estilos_2','#modal_estilos_1,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_jerarquias('.estilos_3','#modal_estilos_3','#modal_estilos_1,#modal_estilos_2,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_jerarquias('.estilos_4','#modal_estilos_4','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_5,#modal_estilos_6,#modal_estilos_7');
	modal_jerarquias('.estilos_5','#modal_estilos_5','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_6,#modal_estilos_7');
	modal_jerarquias('.estilos_6','#modal_estilos_6','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_7');
	modal_jerarquias('.estilos_7','#modal_estilos_7','#modal_estilos_1,#modal_estilos_2,#modal_estilos_3,#modal_estilos_4,#modal_estilos_5,#modal_estilos_6');
});

function modal_jerarquias(tabla,modal_show,modal_hide){
	$(tabla).click(function() {		
		$(modal_show).modal('show');
		$(modal_hide).modal('hide');
	});
}