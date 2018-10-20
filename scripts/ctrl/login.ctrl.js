var app = angular.module('bookStoreApp');
app.controller('loginCtrl', function ($scope, $rootScope, $location, $uibModal, dataService) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/signin.html',
            controller: 'signInCtrl',
            size: 'md'
        })

})