var app = angular.module('bookStoreApp');
app.controller('shopingCartCtrl', function ($scope, $rootScope, $location, dataService) {
    $scope.removeFromCart = function (book) {
        var i = $rootScope.myCartItems.indexOf(book);
        $scope.myCartItems.splice(i, 1);
        if( $rootScope.myCartItems.length === 0){
            $location.path('/books')
        }
    }

})