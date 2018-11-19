var app = angular.module('bookStoreApp')
app.controller('bookCtrl', function ($scope, $uibModalInstance, dataService, bookId){

    dataService.read("books", bookId, function (data) {
        $scope.book = data;
    });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})