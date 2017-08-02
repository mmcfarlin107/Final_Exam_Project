var app = angular.module('myModule');

app.controller('profileCtrl', function($scope, loginService){

$scope.setPerson = loginService.checkLogin;




//Closing Controller
});
