angular.module("angappRoutes",[]).config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
    $routeProvider
        //Home page
        .when("/home",{
            templateUrl :"views/home.html",
            controller  :"HomeController"
        })
        //About page
        .when("/about",{
            templateUrl :"views/about.html",
            controller  :"AboutController"
        })
        //Contact page
        .when("/contact",{
            templateUrl :"views/contact.html",
            controller  :"ContactController"
        });

    $locationProvider.html5Mode(true);
}]);