belAir.controller('HeaderController', ['$scope', '$aside', '$location', function($scope, $aside, $location) {

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
			animation: false,
			controller: function($scope, $uibModalInstance) {
				$scope.close = function(e) {
					$uibModalInstance.dismiss();
					e.stopPropagation();
				};

				$scope.go = function(page, e) {
					$scope.close(e);
					$location.url(page);
				}
			}
		}).result.then(postClose, postClose);
	}
}]);