// handle form updates and submission
angular.module('waitstaff')
    .controller('formController', function ($scope, $attrs, $rootScope, MealService, IncomeService) {
        $scope.meal = MealService;
        $scope.income = IncomeService;
        $scope.submitAndValidate = function(){

            $scope.income.add($scope.meal)
        }

    });
