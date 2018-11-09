var app = angular.module('bookStoreApp');
app.controller('wishListCtrl', function ($scope, $rootScope, $localStorage, $location, dataService) {

    $scope.removeFromList = function (book) {
        dataService.delete('wishlist', book.id, function (data) {
            //$rootScope.myCartItems = data;
            var i = $rootScope.myListItems.indexOf(book);
            $scope.myListItems.splice(i, 1);
            if( $rootScope.myListItems.length === 0){
                $location.path('/wishlist')
            }
        })
    }


})