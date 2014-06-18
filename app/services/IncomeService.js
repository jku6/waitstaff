angular.module('waitstaff').factory('IncomeService', function () {
    return {
        total: function () {
            var total = 0;
            angular.forEach(this.meals, function (meal) {
                total += Math.round(meal.price * meal.tipPercent) / 100;
            })
            return total;
        },
        meals: [],
        average: function () {
            return this.total() / this.meals.length;
        },
        add: function (meal) {
            console.log('adding meal')
//                $http.post('/income/meals', meal).success(function(response){
            this.meals.push(angular.copy(meal))
            meal.reset();
//                })

        },
        load: function () {
//                $http.get('/income/meals').success(function(response){
//                    this.meals = response;
//                })
        }
    };
});