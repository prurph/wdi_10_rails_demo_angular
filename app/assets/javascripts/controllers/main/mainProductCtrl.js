var ProductCtrl = function($scope, $routeParams, $http, productData) {
  $scope.data = productData.products[0];

  // Pass callback to wait for return from remote service
  productData.loadProduct($routeParams.productId, function(data) {
    $scope.data.product = data.product;
  });
}
