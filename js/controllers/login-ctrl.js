var app = angular.module('myModule');

app.controller('loginCtrl', function($scope, loginService){
var person;

$scope.setPerson = loginService.checkLogin;

//closing controller
})
