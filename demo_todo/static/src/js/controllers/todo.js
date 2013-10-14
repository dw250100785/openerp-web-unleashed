/*
 * Main Controller
 */
openerp.unleashed.module('demo_todo',function(todo, _, Backbone, base){
 
    var Controller = base.utils('BaseController');
    
    todo.register(new Controller({
        type: 'views',
        name: 'todo',
        display_name: 'TodoList',

        template: "DemoTodo",
        region: '.todo-list',

        collection: todo.collections('Todos'),
        view: todo.views('Todos'),
    }));

});