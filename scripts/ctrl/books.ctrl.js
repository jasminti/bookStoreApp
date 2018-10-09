var app = angular.module('bookStoreApp');
app.controller('booksCtrl', function ($scope, dataService) {

    dataService.list("books", function (data) {
        $scope.books = data;
    })
})