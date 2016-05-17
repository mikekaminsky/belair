belAir.controller('HeaderController', ['$scope', '$aside', function($scope, $aside) {

	$scope.asideState = {
		open: false
	};

	$scope.openAside = function(position, backdrop) {
		$scope.asideState = {
			open: true,
			position: position
		};

		function postClose() {
			$scope.asideState.open = false;
		}

		$aside.open({
			templateUrl: 'nav.html',
			placement: position,
			size: 'sm',
			backdrop: backdrop,
			controller: function($scope, $uibModalInstance) {
				$scope.close = function(e) {
					$uibModalInstance.dismiss();
					e.stopPropagation();
				};
			}
		}).result.then(postClose, postClose);
	}

}]);