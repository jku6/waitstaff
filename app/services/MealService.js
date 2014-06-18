angular.module('waitstaff').factory('MealService', function () {
    return {
        price: 0,
        taxRate: 0,
        tipPercent: 0,
        subtotal: function () {
            var base = this.price
            var tip = Math.round(this.price * this.tipPercent) / 100;
            return base + tip;
        },
        reset: function () {
            this.price = 0;
            this.taxRate = 0;
            this.tipPercent = 0
        }

    };
});