var app = angular.module('bookStoreApp');
app.controller('wishListCtrl', function ($scope, $rootScope, $localStorage, $location, dataService) {

    refresh();
    function refresh(){
        dataService.list('wishlist', function (data) {
            $rootScope.myListItems = data;
        })
    }

    $scope.removeFromList = function (book) {
        dataService.delete('wishlist', book.id, function (data) {
                refresh();
            })
    }

})