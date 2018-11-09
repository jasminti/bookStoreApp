var app = angular.module('bookStoreApp')
app.controller('userNavbarCtrl', function ($scope, $location){

    $scope.logout = function () {
        console.log("Uspjesno ste log out!")
        $location.path('/');
    }
})