var app = angular.module('bookStoreApp');
app.controller('editUserCtrl', function ($scope, $routeParams, $uibModalInstance, $location, dataService) {
    $scope.id = $routeParams.id;
    $scope.user = users[$scope.id - 1];

    $scope.editUser = function (user) {
        dataService.update("users", user, user.id, function (data) {
            console.log(user);
            $uibModalInstance.dismiss('cancel');
            $location.path('/admin')
        })
    }

})