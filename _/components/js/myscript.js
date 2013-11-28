var customerapp= angular.module('customerapp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
customerapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/productos', {
			templateUrl: 'productos.html',
			controller: 'productosController'
    	}).
    	when('/confirmarorden', {
			templateUrl: 'confirmarorden.html',
			controller: 'confirmarordenController'
    	}).
      	otherwise({
			redirectTo: '/productos'
    });
}]);


customerapp.controller('productosController', function($scope) {
	
	
	
});


customerapp.controller('confirmarordenController', function($scope) {

	

});
