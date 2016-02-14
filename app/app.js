'use strict';

var app = angular.module('App', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.
      when('/card', {
          templateUrl: 'app/tmpl/card.html',
          controller: 'cardCtrl'
      }).
      when('/main', {
          templateUrl: 'app/tmpl/main.html'
      }).
      when('/add', {
          templateUrl: 'app/tmpl/add.html'
      });
  }]);
