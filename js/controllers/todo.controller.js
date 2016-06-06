/**
 * Created by panchenliang on 16/5/24.
 */
(function(){
    'use strict';

    angular
        .module('todomvc')
        .controller('TodoController',TodoController);

    TodoController.$inject = ['$routeParams'];
    function TodoController($routeParams){
        var vm = this;
        init();
        //Methods
        vm.addTask = addTask;
        vm.removeTask = removeTask;
        vm.editTask = editTask;
        ////
        function _filterDataByStatus(tasks,status){
            if (status === 'active'){
                return tasks.filter(function(task){
                    return (task.completed != true )
                }) 
            }else if(status === 'completed'){
                return tasks.filter(function(task){
                    return (task.completed == true )
                }) 
            }else{
                return tasks;
            }
        }
        function init(){
            var tasks = [
            {
                title: "第一个任务",
                completed: true
            },
            {
                title: "第二个任务",
                completed: false

            }];

            vm.status = $routeParams.status||"";
            vm.tasks = _filterDataByStatus(tasks,vm.status)
        }
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