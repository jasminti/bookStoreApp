var app = angular.module('bookStoreApp', ['ngRoute', 'ui.bootstrap']);

users = [
    {
        id: 1,
        name: 'John',
        email: 'john@aol.com',
        password: 'john',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Bill',
        email: 'bill@aol.com',
        password: 'bill',
        role: 'user'
    },
    {
        id: 3,
        name: 'Jack',
        email: 'jack@aol.com',
        password: 'jack',
        role: 'user'
    },
];
currentUser = {};

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/usernavbar', {
            templateUrl: 'view/usernavbar.html',
            controller: 'userNavbarCtrl'
        })
        .when('/userpage', {
            templateUrl: 'view/userpage.html',
            controller: 'userPageCtrl'
        })
        .when('/wishlist', {
            templateUrl: 'view/wishlist.html',
            controller: 'wishListCtrl'
        })
        .when('/shopingcart', {
            templateUrl: 'view/shopingcart.html',
            controller: 'shopingCartCtrl'
        })
        .when('/signup', {
            templateUrl: 'view/signup.html',
            controller: 'signUpCtrl'
        })
        .when('/signin', {
            templateUrl: 'view/signin.html',
            controller: 'signInCtrl'
        })
        .otherwise({ redirectTo: '/' });
}])
