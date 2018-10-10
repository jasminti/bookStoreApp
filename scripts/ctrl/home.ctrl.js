var app = angular.module('bookStoreApp')
app.controller('homeCtrl', function ($scope, dataService){
    $scope.users = users;

    dataService.list("books", function (data) {
        $scope.books = data;
        console.log(data);
    })
})