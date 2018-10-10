var app = angular.module('bookStoreApp');
app.controller('authorsCtrl', function ($scope, dataService) {

    dataService.list("authors", function (data) {
        $scope.authors = data;
    })
})