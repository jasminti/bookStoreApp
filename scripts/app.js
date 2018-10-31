var app = angular.module('bookStoreApp', ['ngRoute', 'ui.bootstrap', 'ngStorage', 'ngSanitize']);

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
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        })
        .when('/edituser', {
            templateUrl: 'view/edituser.html',
            controller: 'editUserCtrl'
        })
        .when('/admin', {
            templateUrl: 'view/admin.html',
            controller: 'adminCtrl'
        })
        .when('/users', {
            templateUrl: 'view/user.html',
            controller: 'usersCtrl'
        })
        .when('/carousel', {
            templateUrl: 'view/carousel.html',
            controller: 'carouselCtrl'
        })
        .when('/authors', {
            templateUrl: 'view/authors.html',
            controller: 'authorsCtrl'
        })
        .when('/books', {
            templateUrl: 'view/books.html',
            controller: 'booksCtrl'
        })
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
            template: '',
            controller: 'loginCtrl'
        })
        .otherwise({ redirectTo: '/' });
}])
