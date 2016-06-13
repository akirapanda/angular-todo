/**
 * Created by panchenliang on 16/5/24.
 */
(function(){
    'use strict';

    angular
        .module('todomvc')
        .controller('TodoController',TodoController);

    TodoController.$inject = ['$scope','$routeParams','TaskService'];
    function TodoController($scope,$routeParams,TaskService){
        var vm = this;
        init();
        //Methods
        vm.addTask = addTask;
        vm.removeTask = removeTask;
        vm.editTask = editTask;
        vm.saveEdit = saveEdit;
        ////
        function _filterByStatus(status){
            if (status === 'active'){
                return {completed:false};
            }else if (status === 'completed'){
                return {completed:true};
            }else{
                return {};
            }
        }
        function init(){
            vm.status =  $routeParams.status||"";
            vm.statusFilter =_filterByStatus(vm.status);
            vm.tasks = TaskService.get();
        }
        function addTask(){
            var newTask = {
                title: vm.newTask,
                completed:false
            };

            if(!newTask.title){
                return false;
            }
            
            TaskService.insert(newTask);
            vm.newTask = "";
          
        }

        function  removeTask(task){
            TaskService.delete(task);
        }


        function editTask(task){
            vm.editedTask = task;
        }

        function saveEdit(task){
            TaskService.put(task, vm.tasks.indexOf(task));
            vm.editedTask = null;
        }
    }
})();