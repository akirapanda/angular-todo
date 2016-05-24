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
    }
})();