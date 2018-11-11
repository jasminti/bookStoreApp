var app = angular.module('bookStoreApp');
app.controller('wishListCtrl', function ($scope, $rootScope, $localStorage, $location, dataService) {

    refresh();
    function refresh(){
        dataService.list('wishlist', function (data) {
            $rootScope.myListItems = data;
        })
    }

    //$rootScope.myCartItems = [];
    $scope.addToCart = function (book) {
        dataService.insert('basket/' + book.id, {}, function (data) {
            $rootScope.myCartItems = data;
        })
        $rootScope.myCartItems.push(book);
        dataService.delete('wishlist', book.id, function (data) {
            refresh();
        })
    }

    $scope.removeFromList = function (book) {
        dataService.delete('wishlist', book.id, function (data) {
                refresh();
        })
    }

})