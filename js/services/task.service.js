(function ()
{
    'use strict';

    angular
        .module('todomvc')
        .service('TaskService', TaskService);

    TaskService.$inject = [];
    function TaskService()
    {
      var STORAGE_ID = 'todos';

      var service = {


        tasks:[],

        _getFromLocalStorage: function () {
          return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        _saveToLocalStorage: function (task) {
          localStorage.setItem(STORAGE_ID, JSON.stringify(task));
        },
        get: function () {
            return angular.copy(service._getFromLocalStorage(), service.tasks);
        },

        insert: function (task) {
          service.tasks.push(task);
          service._saveToLocalStorage(service.tasks);
        },
        delete: function (task) {
          service.tasks.splice(service.tasks.indexOf(task), 1);
          service._saveToLocalStorage(service.tasks);
        },
        put: function (task, index) {
          service.tasks[index] = task;
          service._saveToLocalStorage(service.tasks);
        }
      }// end of service
      return service;

    }//end of taskService
})();