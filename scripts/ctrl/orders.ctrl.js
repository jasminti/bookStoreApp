var app = angular.module('bookStoreApp')
app.controller('ordersCtrl', function ($scope, $uibModal, dataService){

    dataService.list("orders", function (data) {
        $scope.orders = data;
    })

    $scope.showOrder = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/usersorder.html',
            controller: 'usersOrderCtrl',
            size: 'xl',
            resolve: { orderId: id}
        })
    }
})