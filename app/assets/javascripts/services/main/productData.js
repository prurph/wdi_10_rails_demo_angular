// productData wraps remote service that provides product data
// controllers use it to get remote data

angular.module("StoreFront").factory("productData", ["$http", function($http) {
  // initialize the product data with heading
  var productData = { products: [
    { name: "Loading Products", description: "", price: "" }
  ]};

  // method to get products
  productData.loadProducts = function() {
    $http.get("./products.json").success(function(data) {
      // assign JSON from remote service
      productData.products = data.products;
      console.log("Products loaded successfully.");
    })
    .error(function() {
      console.log("Failed to load products.");
    });
  };

  // get one product by id
  productData.loadProduct = function(productId, callback) {
    $http.get("products/" + productId + ".json").success(function(data) {
      callback(data);
      console.log("Successfully loaded product " + productId);
    })
    .error(function() {
      console.log("Failed to load product " + productId);
    });
  };

  productData.createProduct = function(newProduct) {
    input = {
      new_product: {
        name: newProduct.newProductName,
        price: newProduct.newProductPrice,
        description: newProduct.newProductDescription
      }
    };
    $http.post("./products.json", input).success(function(data) {
      productData.products.push(data.product)
      console.log("Successfully created product.");
    })
    .error(function() {
      console.log("Failed to create new product");
    });

    return true;
  }
  return productData;
}]);
