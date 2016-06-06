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
            vm.tasks = TaskService.tasks;
        }
        function addTask(){
            var newTask = {
                title: vm.newTask,
                completed:false
            };

            if(!newTask.title){
                return false;
            }
            
            vm.tasks.push(newTask);
        }

        function  removeTask(task){
            vm.tasks.splice(vm.tasks.indexOf(task), 1);
        }


        function editTask(task){
            vm.editedTask = task;
        }
    }
})();