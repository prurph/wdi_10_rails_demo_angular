//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront', ['ngRoute']);

StoreFront.config(['$routeProvider', function($routeProvider){
  // single product route "/product/:productId"
  $routeProvider.when("/product/:productId", {
    templateUrl: "../assets/mainProduct.html",
    controller: "ProductCtrl"
  });

  // default route
  $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',
    controller: 'IndexCtrl'
  });
}]);
