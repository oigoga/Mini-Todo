let todoForm = document.getElementById("form");
let listOfTodo = document.querySelector("#todo__list");
let inputField = document.querySelector("#todo__input");



function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}


 function editTodoText (eventObject){
  
  let editButtonClicked = eventObject.target
let li = editButtonClicked.parentNode.parentNode.parentNode
let deletebtn = li.childNodes[1].childNodes[4]
let child = li.childNodes[1].childNodes[3].innerHTML
inputField.value = child
let newbtn = document.createElement("button")
newbtn.innerHTML = `Done`
newbtn.classList.add("done-btn")
li.append(newbtn)
editButtonClicked.disabled = true
newbtn.addEventListener("click", doThis)
function doThis(){
let childsy = li.childNodes[1].childNodes[3]
childsy.innerHTML = inputField.value
console.log(childsy.innerHTML)
inputField.value = ""
editButtonClicked.disabled = false
newbtn.remove()

}
}
  
function selectButtons(){
  let collectButtons = document.querySelectorAll(".delete-btn")
  let lastButton = collectButtons[collectButtons.length - 1]
  
  lastButton.addEventListener("click", deleteTodo)
  
  let collectEditButtons = document.querySelectorAll(".edit-btn")
  let lastEditButton = collectEditButtons[collectButtons.length - 1]
  
  lastEditButton.addEventListener("click", editTodoText)
  
  
  }
// 

function showTodoOnTheScreen(todo) {
 
  const li = document.createElement("li");
  li.classList.add("todo__section-todoItem");

  li.innerHTML = `
  <div class= "div-main-wrapper">
      <input class="todo-checkbox" type="checkbox" />
      <span class="todo-text"> ${todo} </span>
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
  
  const todoValue = inputField.value;
  showTodoOnTheScreen(todoValue);
  inputField.value = "";
}

function clearForm() {

  inputField.value = ""; 
}




todoForm.addEventListener("submit", todoFormSumbitHandler);

const clearButton = document.querySelector("#Clear");
clearButton.addEventListener("click", clearForm);
