var app = angular.module('bookStoreApp');
app.controller('wishListCtrl', function ($scope, $rootScope, $localStorage, $location, dataService) {

    $scope.removeFromCart = function (book) {
        dataService.delete('basket', book.id, function (data) {
            //$rootScope.myCartItems = data;
            var i = $rootScope.myCartItems.indexOf(book);
            $scope.myCartItems.splice(i, 1);
            if( $rootScope.myCartItems.length === 0){
                $location.path('/books')
            }
        })
    }

    $scope.addItem = function (book) {
        $scope.books.push(book);
    }

    $rootScope.myListItems = [];
    $scope.addToList = function (book) {
        dataService.insert('basket/' + book.id, {}, function (data) {
            $rootScope.myListItems = data;
        })
        $rootScope.myListItems.push(book);
    }
})