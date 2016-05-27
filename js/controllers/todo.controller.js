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
                title: "第一个任务",
                completed: true
            },
            {
                title: "第二个任务"
            }
        ]

        //Methods
        vm.addTask = addTask;
        vm.removeTask = removeTask;
        vm.editTask = editTask;
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


        function editTask(task){
            console.info("click");
            vm.editedTask = task;
        }
    }
})();