angular.module( 'waitstaff' )
.controller( 'chargesController', function( $scope ) {
	$scope.data = {
		subtotal: 0,
		tip: 0,
		total: 0
	};

	// when a meal charge is rung up …
	$scope.$on( 'charge', function( event, data ) {
		$scope.data.subtotal = data.subtotal;
		$scope.data.tip = data.tip;
		$scope.data.total = data.subtotal + data.tip;
	});
});
