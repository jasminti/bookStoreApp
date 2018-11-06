var app = angular.module('bookStoreApp')
app.controller('usersOrderCtrl', function ($scope, dataService){

    $scope.buyBook = function (id) {
        dataService.list('checkout', function (data) {
            alert("Formirana je narudzba " + data.id + " datuma " + data.date);
        })
    }
})