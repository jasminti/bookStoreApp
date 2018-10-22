var app = angular.module('bookStoreApp')
app.controller('signInCtrl' , function ($scope, $rootScope, $location, $uibModalInstance, $uibModal, dataService) {

    /*$scope.checkCustomerName = function (user) {
        console.log(user);
        for(var i = 0; i < users.length; i++) {
            console.log(users[i]);
            $uibModalInstance.dismiss('cancel');
            $location.path('/shopingcart')
            if(user.name === users[i].name) {
                if(user.pass === users[i].password) {
                    console.log(users[i].password);
                    $rootScope.currentUser = users[i];
                    currentUser = $rootScope.currentUser;
                    $location.path('/shopingcart')
                    return
                }
            }
        }
        alert('neispravni podaci za korisnika!')
    }*/


    $scope.checkCustomerName = function (user) {
        var URL = 'login/' + user.name + '/' + user.pass;
        dataService.list(URL, function (data) {
            if( data ) {
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
    }

    $scope.buyBook = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/signin.html',
            controller: 'signInCtrl',
            size: 'xl',
            resolve: { bookId: id},
        })
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
        $location.path('/books')
    };

})