var app = angular.module('bookStoreApp')
app.controller('usersOrderCtrl', function ($scope, $uibModal, $uibModalInstance, $location, orderId, dataService){

    dataService.read('orders', orderId, function (data) {
        $scope.order = data;
    })

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
        $location.path('/orders')
    };
})