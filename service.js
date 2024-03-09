angular.module('todo').factory('todoStorage', function() {

  var TODO_DATA = 'TODO_DATA';

  var storage = {

    todos: [],

    _saveToLocalStorage: function(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data))
    },

    _getFromLocalStorage: function() {


      if (localStorage.getItem(TODO_DATA) !== undefined) {
        return JSON.parse(localStorage.getItem(TODO_DATA))
      }
      return []
    },


    get: function() {

      angular.copy(storage._getFromLocalStorage(), storage.todos)
      return storage.todos;
    },
    remove: function(todo) {

      var idx = storage.todos.findIndex(function(item) {
        return item.id === todo.id;
      });

      if (idx > -1) {
        storage.todos.splice(idx, 1); // 해당 아이디의 todo만 삭제
        storage._saveToLocalStorage(storage.todos)
      }
    },

    add: function(newTodoTitle) {

      var size = storage.todos.length + 1;

      var newTodo = {
        id: size,
        title: newTodoTitle,
        completed: false,
        createDate: Date.now()
      }

      storage.todos.push(newTodo)
      storage._saveToLocalStorage(storage.todos)


    },
    update: function() {

      storage._saveToLocalStorage(storage.todos)

    }





  }

  return storage;
})



// 서비스를 만드는 함수들

// service 
// factory 
// provider