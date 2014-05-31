angular.module( 'waitstaff' )
.controller( 'earningsController', function( $scope ) {
	$scope.data = {
		tip: {
			total: 0,
			average: 0
		},
		mealCount: 0
	};

	// when a meal charge is rung up …
	$scope.$on( 'charge', function( event, data ) {
		$scope.data.tip.total += data.tip;
		$scope.data.mealCount ++;
		$scope.data.tip.average = $scope.data.tip.total / $scope.data.mealCount;
	});
});
