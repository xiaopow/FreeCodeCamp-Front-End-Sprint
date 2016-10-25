document.addEventListener('DOMContentLoaded', function() {
  //To do list
  var userInTask = document.getElementById('task-detail');
  var todoList = document.getElementById('todo-list');
  var addTaskButton = document.getElementById('addtask-button');
  var taskCount = 0;

  var addTask = function() {
    var taskDiv = document.createElement('div');
    var taskH5 = document.createElement('h5');
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class','btn btn-danger remove-button');
    removeButton.innerHTML = "REMOVE";
    removeButton.addEventListener('click', function() {
      var parent = this.parentNode.parentNode;
      var child = this.parentNode;
      parent.removeChild(child);
    });

    taskH5.setAttribute('class', 'col-xs-4 task');
    taskH5.innerHTML = userInTask.value;
    taskDiv.appendChild(taskH5);
    taskDiv.appendChild(removeButton);
    todoList.appendChild(taskDiv);
  };

  addTaskButton.onclick = function() {
    if (taskCount < 10 && userInTask.value !== '') {
      addTask();
      taskCount++;
      // Clears the input element.
      userInTask.value = '';
    }
  };
});
