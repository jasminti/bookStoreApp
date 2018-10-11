var app = angular.module('bookStoreApp')
app.controller('carouselCtrl', function ($scope, dataService){

    dataService.list("books", function (data) {
        $scope.books = data;
    })
})