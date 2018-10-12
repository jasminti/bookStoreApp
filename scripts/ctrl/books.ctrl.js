var app = angular.module('bookStoreApp');
app.controller('booksCtrl', function ($scope, $uibModal, dataService) {

    dataService.list("books", function (data) {
        $scope.books = data;
    })
    
    $scope.showBook = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/book.html',
            controller: 'bookCtrl',
            size: 'xl',
            resolve: { bookId: id},
        })
    }

    /*$scope.buyBook = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/buybook.html',
            controller: 'buyBookCtrl',
            size: 'xl',
            resolve: { bookId: id},
        })
    }*/

    $scope.addItem = function (book) {
        $scope.books.push(book);
    }
    $scope.myCartItems = [];
    $scope.addToCart = function(book) {
        $scope.myCartItems.push(book);
    }
})