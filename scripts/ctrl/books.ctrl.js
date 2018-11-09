var app = angular.module('bookStoreApp');
app.controller('booksCtrl', function ($scope, $uibModal, $rootScope, $localStorage, dataService) {
    refresh();

    $scope.clicked = function (bookId) {
        if ( currentUser.id != undefined) {
            var dataSet = "books/" + bookId + "/" + currentUser.id;
            dataService.list(dataSet, function (data) {
                refresh();
            })
        }
    }

    function refresh () {
        dataService.list("books", function (data) {
            $scope.books = data;
        })
    }

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
        dataService.insert('basket/' + book.id, {}, function (data) {
            $rootScope.myCartItems = data;
        })
        $rootScope.myCartItems.push(book);
    }

    $rootScope.myListItems = [];
    $scope.addToList = function (book) {
        dataService.insert('wishlist/' + book.id, function (data) {
            $rootScope.myListItems = data;
        })
        $rootScope.myListItems.push(book);
    }

    $scope.showRate = function (rate, id) {
        var url = 'books/' + id + '/' + rate;
        dataService.read(url, {}, function (data) {
            rate = data.rating;
        })
    }

})