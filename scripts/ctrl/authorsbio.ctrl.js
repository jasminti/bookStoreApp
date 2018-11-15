var app = angular.module('bookStoreApp');
app.controller('authorsBioCtrl', function ($scope, $location, $uibModalInstance, dataService, authorId) {

    dataService.read("authors", authorId, function (data) {
        $scope.author = data;
    });

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
        $location.path('/authors');
    };

})