angular.module( 'waitstaff' )
.controller( 'waitstaffChargesController', function( $scope ) {
	$scope.data = {
		subtotal: 0,
		tip: 0,
		total: 0
	};
});
