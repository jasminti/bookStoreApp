var app = angular.module('bookStoreApp');

app.directive('buy', function (){
    return {
        restrict: "E",
        scope: { book: "=" },
        template: '<button class="btn btn-success" ng-click="addToCart(book)">Buy book</button>',
        controller: "buyCtrl"
    }
});