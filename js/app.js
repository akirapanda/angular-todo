/**
 * Created by panchenliang on 16/5/24.
 */
(function(){
    'use strict';

    angular.module('todomvc', ['ngRoute'])
        .config(routerConfig);
    routerConfig.$inject = ['$routeProvider'];


    function routerConfig($routeProvider){
      $routeProvider
      .when('/',{
        controller: 'TodoController',
        templateUrl: 'partials/todo.html',
        controllerAs: 'vm'
      })
      .when('/:status', {
        controller: 'TodoController',
        templateUrl: 'partials/todo.html',
        controllerAs: 'vm'
      })
    };
})();
