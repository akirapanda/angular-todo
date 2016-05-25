/**
 * Created by panchenliang on 16/5/24.
 */
(function(){
    'use strict';

    angular
        .module('todomvc')
        .controller('TodoController',TodoController);

    TodoController.$inject = [];
    function TodoController(){
        var vm = this;
        vm.tasks = [
            {
                title: "第一个任务"
            },
            {
                title: "第二个任务"
            }
        ]

        //Methods
        vm.addTask = addTask;
        vm.removeTask = removeTask;
        ////
        function addTask(){

            var newTask = {
                title: vm.newTask.trim(),
            };


            if(!newTask.title){
                return;
            }
            vm.tasks.push(newTask);
            vm.newTask = '';
        }

        function  removeTask(task){
            vm.tasks.splice(vm.tasks.indexOf(task), 1);
        }
    }
})();