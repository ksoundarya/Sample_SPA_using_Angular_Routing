var app = angular.module('helloworld',['ui.router'])
         .config(function($stateProvider) {

             var i = 10;
             console.log(i);
              $stateProvider
                  .state('home',{
                     url: '/home',
                      templateUrl: 'template/home.html'
                  })
                
                  .state('about', {
                     url: '/about',
                      templateUrl: 'template/about.html'
                      
                  });
                  
        });


app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});

