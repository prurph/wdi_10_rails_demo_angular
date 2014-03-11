var IndexCtrl = function($scope, $location, $http, productData) {

  $scope.data = productData;
  productData.loadProducts();

  $scope.formData = {
    newProductName: "",
    newProductPrice: "",
    newProductDescription: ""
  }

  $scope.viewPost = function(productId) {
    $location.url('/product/' + productId);
  };

  $scope.createProduct = function() {
    productData.createProduct($scope.formData);
  };

  $scope.navNewProduct = function() {
    $location.url('/product/new');
  };
}
