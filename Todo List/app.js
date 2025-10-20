function addTodoItems() {
    let todoText = document.getElementById("todoText");

    if (todoText.value.trim() === "") {
        Swal.fire("Please enter a value!");
        return;
    } else {
        let todoList = document.getElementById("todoList");
        let todoItem = `<li class="todoItems">${todoText.value} 
          <i onclick="deleteSingleTodo()" class="fa-solid fa-xmark"></i></li>`;

        todoList.innerHTML += todoItem;
        todoText.value = "";
    }
}

function deleteSingleTodo() {
    event.target.parentElement.remove();
}

function deleteAllTodoElem() {
    let todoList = document.getElementById("todoList");

    if (todoList.children.length === 0) {
        Swal.fire("No items to delete!");
        return;
    }

    for (let i = 0; i < todoList.children.length; i++) {
        todoList.children[i].remove();
        i--;
    }

    Swal.fire("All items deleted!");
}