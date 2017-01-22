'use strict'

angular.module('portfolioApp',['ngRoute'])

	.config(function($routeProvider) {
  $routeProvider
      // route for the about page
      .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl'
      })
// route for the home page
      .when('/home', {
        templateUrl : 'views/home.html',
        controller  : 'HomeCtrl'
      })
// route for the contactus page
      .when('/contact', {
        templateUrl : 'views/contact.html',
        controller  : 'ContactCtrl'
      })
// route for the projects page
      .when('/projects', {
        templateUrl : 'views/projects.html',
        controller  : 'ProjectsCtrl'
      })
//default page
      .otherwise('/home');
})
;
