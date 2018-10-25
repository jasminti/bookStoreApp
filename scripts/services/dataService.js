var app = angular.module('bookStoreApp');
app.factory('dataService', function ($http) {
    var baseURL = "http://lib.teatar.org/api/";
    $http.defaults.headers.common.Authorization = "Bearer 1234567890";

    return {
        list: function(dataSet, callback) {
            var url = baseURL + dataSet;
            $http.get(url)
                .then(function (response) {
                    callback(response.data)
                }, function (reason) {
                    console.log("Greska u pristupu");
                    callback(false)
                })
        },
        read: function(dataSet, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $http.get(url)
                .then(function (response) {
                    callback(response.data)
                }, function (reason) {
                    console.log("Greska u pristupu");
                    callback(false)
                })
        },
        insert: function (dataSet, data, callback) {
            var url = baseURL + dataSet;
            $http.post(url, data)
                .then(function (response) {
                    callback(response.data)
                }, function (reason) {
                    console.log("nesto ne radi")
                    callback(false)
                })
        },
        update: function (dataSet, data, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $http.put(url, data)
                .then(function (response) {
                    callback(response.data)
                }, function (reason) {
                    console.log("nesto ne radi")
                    callback(false)
                })
        },
        delete: function (dataSet, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $http.delete(url)
                .then(function (response) {
                    callback(true)
                }, function (reason) {
                    console.log("nesto ne radi")
                    callback(false)
                })
        }
    }
})