var app = angular.module('bookStoreApp');

app.controller('buyCtrl', function ($scope, $rootScope, dataService){

    $scope.addToCart = function (bookId) {
        dataService.insert('basket/' + bookId, {}, function (data) {
            $rootScope.myCartItems = data;
        });
    };
});