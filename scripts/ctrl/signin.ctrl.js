var app = angular.module('bookStoreApp');

app.controller('signInCtrl' , function ($scope, $rootScope, $location, $uibModalInstance, $uibModal, dataService) {

    $scope.checkCustomerName = function (user) {
        dataService.insert('login', user, function (data) {
            if(data){
                currentUser = data;
                $rootScope.currentUser = data;
                $uibModalInstance.dismiss('cancel');
                $location.path('/books')
            }
            else {
                alert("Username or password are wrong!Please try again");
                $location.path('/books')
            }
        })
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
        $location.path('/books')
    };

});