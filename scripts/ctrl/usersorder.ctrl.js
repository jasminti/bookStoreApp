var app = angular.module('bookStoreApp')
app.controller('usersOrderCtrl', function ($scope, orderId, dataService){

    dataService.read('orders', orderId, function (data) {
        $scope.order = data;
    })
})