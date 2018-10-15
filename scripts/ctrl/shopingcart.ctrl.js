var app = angular.module('bookStoreApp');
app.controller('shopingCartCtrl', function ($scope, dataService) {
    dataService.list("books", function (data) {
        $scope.books = data;
    })

})