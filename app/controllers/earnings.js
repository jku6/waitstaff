angular.module( 'waitstaff' )
.controller( 'earningsController', function( $scope ) {
	$scope.data = {
		tip: {
			total: 0,
			average: 0
		},
		mealCount: 0
	};
});
