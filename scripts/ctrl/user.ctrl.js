var app = angular.module('bookStoreApp');
app.controller('userCtrl', function ($scope, $uibModal, $rootScope, dataService, userId, $uibModalInstance, $location) {

    if( userId != 0) {
        dataService.read("users", userId, function (data) {
            $scope.user = data;
            $scope.title = $scope.user.name;
        })
    }
    else {
        $scope.title = 'Add new User'
        $scope.user = {id: userId};
    }
    $scope.saveUser = function (user) {
        if( user.id == 0){
            dataService.insert("users", user, function (data) {
                console.log(data);
                $uibModalInstance.dismiss('cancel');
                $location.path('/admin')
            })
        }
        else{
            dataService.update("users", user, user.id, function (data) {
                console.log(data);
                $uibModalInstance.dismiss('cancel');
                $location.path('/admin')
            })
        }
    }
})