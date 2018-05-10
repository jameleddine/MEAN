module.exports = function(app) {
  var cors = require('cors');
 app.use(cors());

    var todoList = require('../controllers/todoListController');
  
    // todoList Routes
    app.route('/posts')
      .get(todoList.list_all_tasks)
      .post(todoList.create_a_task);
  
  
    app.route('/post/:postId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
  };