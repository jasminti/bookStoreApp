var app = angular.module('bookStoreApp')

app.controller('signInCtrl' , function ($scope) {
    $scope.checkCustomerName = function (user) {
        console.log(user);

    }
})