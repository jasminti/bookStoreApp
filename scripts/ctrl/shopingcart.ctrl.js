var app = angular.module('bookStoreApp');
app.controller('shopingCartCtrl', function ($scope, $rootScope, $location, $uibModal, dataService) {

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

    $scope.buyBook = function (id) {
        dataService.list('checkout', function (data) {
            alert("Formirana je narudzba " + data.id + " datuma " + data.date);
        })
    }

})