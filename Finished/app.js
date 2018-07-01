var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/About', {
        templateUrl: 'pages/About.html',
        controller: 'AboutController'
    })
       
    .when('/Services', {
        templateUrl: 'pages/Services.html',
        controller: 'ServicesController'
    })
        
    .when('/Contact', {
        templateUrl: 'pages/Contact.html',
        controller: 'contactController'
    })
    
    .when('/About/:num', {
        templateUrl: 'pages/second.html',
        controller: 'AboutController'
    })
    
});

myApp.controller('homeController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'home page';
    
}]);

myApp.controller('AboutController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);

myApp.controller('ServicesController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
myApp.controller('AboutController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
