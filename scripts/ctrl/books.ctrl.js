var app = angular.module('bookStoreApp');
app.controller('booksCtrl', function ($scope, $uibModal, $rootScope, dataService) {

    dataService.list("books", function (data) {
        $scope.books = data;
    })
    
    $scope.showBook = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/book.html',
            controller: 'bookCtrl',
            size: 'md',
            resolve: { bookId: id},
        })
    }

    $scope.addItem = function (book) {
        $scope.books.push(book);
    }

    $rootScope.myCartItems = [];
    $scope.addToCart = function (book) {
        $rootScope.myCartItems.push(book);
    }

    $scope.showRate = function (rate, id) {
        var url = 'books/' + id + '/' + rate;
        dataService.read(url, {}, function (data) {
            rate = data.rating;
        })
    }
})