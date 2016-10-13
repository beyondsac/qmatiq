qmatiq.directive('uploaderModel', ['$parse', function($parse){
	return {
		restrict: 'A',
		link: function(scope, iElm, iAttrs, controller) {
			iElm.on('change', function(e){
				$parse(iAttrs.uploaderModel).assign(scope, iElm[0].files[0]);
			});
		}
	};
}]);
//# sourceMappingURL=directives.js.map
