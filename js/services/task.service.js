(function ()
{
    'use strict';

    angular
        .module('todomvc')
        .service('TaskService', TaskService);

    TaskService.$inject = [];
    function TaskService()
    {
      var service = {
        tasks:[
        {
            title: "第一个任务",
            completed: true
        },
        {
            title: "第二个任务",
            completed: false
        }],


        add: function(title){
          var newTask = {
              title: title,
              completed:false
          };

          if(!newTask.title){
              return false;
          }
        
          service.tasks.push(newTask);
          return true;
        } 

      }// end of service
      return service;

    }//end of taskService
})();