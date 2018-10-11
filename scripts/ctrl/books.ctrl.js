var app = angular.module('bookStoreApp');
app.controller('booksCtrl', function ($scope, dataService, $uibModal) {

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
})