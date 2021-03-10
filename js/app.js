'use strict'

//Селекторы
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
 //Это селектор самих туду-шек которые будет вводить пользователь
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo')

//Ивенты
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckTodo);
filterOption.addEventListener("click", filterTodo);
//Функции

//Добавить туду
function addTodo(event){
    //Если поле пустое, не доьавлять туду
    if(todoInput.value != ""){
    //Сброс стандарного ивента(в данном случае ивент кнопки submit)
    event.preventDefault();
    //Создание блока с классом todo в котором будет текст из поля ввода и кнопки удалить и отметить как выполненое
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Создание li-а и даёт ему класс todo-item
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    //Текст из поля ввода которые передается в li в html
    newTodo.innerText = todoInput.value;
    //Создание вложенности елемнта newTodo в елмент todoDiv
    todoDiv.appendChild(newTodo);
    //Кнопка выполнения задачи
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<img src="img/complete_icon.svg">';
    todoDiv.appendChild(completeButton);
    //Кнопка удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    //ЗАМЕНИТЬ ИКОНКИ НА НОРМАЛЬНЫЕ svg
    deleteButton.innerHTML = '<img src="img/delete_icon.svg">';
    todoDiv.appendChild(deleteButton);
    //Поместить весь блок туду в ul
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
//Отмена перезагрузки
else{
    event.preventDefault();
}}

function deleteCheckTodo(e){
    const item = e.target;

    //Удалить туду
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('deleted');
        todo.addEventListener("transitionend", removeTodo)
        function  removeTodo(){
            todo.remove();
        }
    }

    //Отметить как выполненое
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
 /* Незаконченный функционал
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
  */