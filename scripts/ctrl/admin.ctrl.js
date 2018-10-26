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

    $scope.addNewUser = function (user) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/user.html',
            controller: 'usersCtrl',
            size: 'xl',
        })
    }

    $scope.editUser = function (user) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/edituser.html',
            controller: 'editUserCtrl',
            size: 'xl',
        })
    }
    //$scope.editUser = function (user) {
        //console.log(user)
        //$location.path('/user')
    //}

    function refresh() {
        dataService.list("users", function(data){
            $scope.users = data
        })
    }
})