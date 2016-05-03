var baHeader = function() {
	var directive = {
		restrict: 'EA',
		templateUrl: 'header.html',
		controller: 'HeaderController',
		bindToController: true
	};

	return directive;
}

belAir.directive('baHeader', baHeader);