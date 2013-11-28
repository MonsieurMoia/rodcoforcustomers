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

function searchProductsController($scope){
	$scope.products = [
		{
			name: 'CANDADOS YALE 11840 VISUAL BLISTER',
			image:'http://lorempixel.com/400/200',
			price: 3201.00,
			active: false	
		},
		{
			name: 'CANDADO YALE ITALIANO 11360 ESPIGA LARGA',
			image:'http://lorempixel.com/400/200',
			price: 7850.00,
			active: false	
		},
		{
			name: 'CERRADURA YALE AUTOMOVIL 49016',
			image:'http://lorempixel.com/400/200',
			price: 3500.00,
			active: false	
		},
		{
			name: 'CERRADURA YALE AUTOMOVIL 89520C',
			image:'http://lorempixel.com/400/200',
			price: 6700.00,
			active: false	
		}

	];
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};
	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.products, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
