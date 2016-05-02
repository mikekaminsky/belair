var baFooter = function() {
	var directive = {
		restrict: 'EA',
		templateUrl: 'footer.html',
		controller: 'FooterController',
		bindToController: true
	};

	return directive;
}

belAir.directive('baFooter', baFooter);