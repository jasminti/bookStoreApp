var app = angular.module('bookStoreApp')
app.controller('authorCtrl', function ($scope, $uibModalInstance, dataService, authorId){

    dataService.read("authors", authorId, function (data) {
        $scope.author = data;
    })

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    }
})