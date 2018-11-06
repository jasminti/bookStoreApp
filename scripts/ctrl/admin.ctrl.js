var app = angular.module('bookStoreApp')
app.controller('adminCtrl', function ($scope, $http, $location, $routeParams, $uibModal, dataService){
    refresh()

    $scope.delUser = function (user) {
        var ans = confirm("Jeste sigurni da zelite obrisati " + user.name + " ?")
        if( ans === true){
            dataService.delete("users", user.id, function(data){
                alert("Person deleted");
                refresh()
            })
        }
    }

    $scope.editUser = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/user.html',
            controller: 'userCtrl',
            size: 'xl',
            resolve: { userId: id}
        })
    }

    $scope.usersOrder = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/usersorder.html',
            controller: 'usersOrderCtrl',
            size: 'md',
            resolve: { userId: id}
        })
    }

    function refresh() {
        dataService.list("users", function(data){
            $scope.users = data
        })
    }
})