angular.module( 'waitstaff' )
.controller( 'chargesController', function( $scope ) {
	$scope.data = {
		subtotal: 0,
		tip: 0,
		total: 0
	};
});
