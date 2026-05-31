'use strict';
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');
const taskList = document.getElementById('taskList');
const appCard = document.getElementById('appCard');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Удалить';
  deleteBtn.className = 'btn btn-delete';

  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  li.append(deleteBtn);

  taskList.append(li); 
}

addBtn.addEventListener('click', function() {
  const text = taskInput.value.trim();
  if (text !== '') {
    createTodoItem(text);
    taskInput.value = ''; 
  }
});

darkBtn.addEventListener('click', function() {
  appCard.classList.add('dark-theme');
});

lightBtn.addEventListener('click', function() {
  appCard.classList.remove('dark-theme');
});
