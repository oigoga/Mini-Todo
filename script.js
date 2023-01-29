let todoForm = document.getElementById("form");
let listOfTodo = document.querySelector("#todo__list");
let inputField = document.querySelector("#todo__input");
let inputFieldDate = document.querySelector("#todo__date");
let inputFieldTime = document.querySelector("#todo__time");
let list = document.querySelector('ul');
let items = list.querySelectorAll('li');

function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}

items = Array.from(items).sort(function(a, b) {
  let dateA = new Date(a.querySelector('.todo-date').textContent + ' ' + a.querySelector('.todo-time').textContent);
  let dateB = new Date(b.querySelector('.todo-date').textContent + ' ' + b.querySelector('.todo-time').textContent);
  return dateA - dateB;
});

list.innerHTML = '';

for (let item of items) {
  list.appendChild(item);
}

function editTodo(eventObject) {
  let editButtonClicked = eventObject.target;
  let li = editButtonClicked.parentNode.parentNode.parentNode;
  
  let child = li.childNodes[1].childNodes[3].innerHTML;
  let childDate = li.childNodes[1].childNodes[4].innerHTML;
  let childTime = li.childNodes[1].childNodes[5].innerHTML;
  inputField.value = child;
  inputFieldDate.value = childDate;
  inputFieldTime.value = childTime;
  let newbtn = document.createElement("button");
  newbtn.innerHTML = `Done`;
  newbtn.classList.add("done-btn");
  li.append(newbtn);
  editButtonClicked.disabled = true;
  newbtn.addEventListener("click", doThis);
  function doThis() {
    let childsy = li.childNodes[1].childNodes[3];
    let childsyDate = li.childNodes[1].childNodes[4];
    let childsyTime = li.childNodes[1].childNodes[5];

    childsy.innerHTML = inputField.value;
    childsyDate.innerHTML = inputFieldDate.value;
    childsyTime.innerHTML = inputFieldTime.value;

    console.log(childsy.innerHTML);
    inputField.value = "";
    inputFieldDate.value = "";
    inputFieldTime.value = "";
    editButtonClicked.disabled = false;
    newbtn.remove();
  }
}

function selectButtons() {
  let collectButtons = document.querySelectorAll(".delete-btn");
  let lastButton = collectButtons[collectButtons.length - 1];

  lastButton.addEventListener("click", deleteTodo);

  let collectEditButtons = document.querySelectorAll(".edit-btn");
  let lastEditButton = collectEditButtons[collectButtons.length - 1];

  lastEditButton.addEventListener("click", editTodo);
}
//

function showTodoOnTheScreen(todo, date, time) {
  const li = document.createElement("li");
  li.classList.add("todo__section-todoItem");

  li.innerHTML = `
  <div class= "div-main-wrapper">
      <input class="todo-checkbox" type="checkbox" />
      <span class="todo-text"> ${todo}</span>
      <span class="todo-date"> ${date}</span>
      <span class="todo-time"> ${time}</span>
      <div class="todo_actions-wrapper">
          <button id="edit_btn" class="todo_actions edit-btn">edit</button>
          <button id="delete_btn" class="todo_actions delete-btn">delete</button>
      </div>
  </div>
  `;

  listOfTodo.appendChild(li);
  selectButtons();
}

function todoFormSumbitHandler(eventObject) {
  eventObject.preventDefault();

  const todoTextValue = inputField.value;
  const todoDateValue = inputFieldDate.value;
  const todoTimeValue = inputFieldTime.value;
  showTodoOnTheScreen(todoTextValue, todoDateValue, todoTimeValue);
  inputField.value = "";
}

function clearForm() {
  inputField.value = "";
}

todoForm.addEventListener("submit", todoFormSumbitHandler);

const clearButton = document.querySelector("#Clear");
clearButton.addEventListener("click", clearForm);
