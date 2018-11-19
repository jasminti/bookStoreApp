var app = angular.module('bookStoreApp')
app.directive('buy', function (){
    var buyCtrl = function ($scope, $rootScope, dataService) {
        $scope.addToCart = function (book) {
            dataService.insert('basket/' + book, {}, function (data) {
                $rootScope.myCartItems = data;
            })
        }
    }
    return {
        restrict: "E",
        scope: {data: "="},
        template: "<button class=\"btn btn-success\" ng-click=\"addToCart(data)\">Buy</button>",
        controller: buyCtrl
    }
})
