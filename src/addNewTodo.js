const addNewTodo=function(){
    //Display a form to get user to add new todo
    const todoForm=document.createElement("form");
    const newTodoTitleLabel=document.createElement("label");
    const newTodoTitleInput=document.createElement("input");
    newTodoTitleInput.type="text";
    newTodoTitleLabel.textContent="Name of new task: ";
    const submitButton=document.createElement("button");
    submitButton.type="submit";
    submitButton.textContent="Submit";

    const todoDiv=document.querySelector(".newToDo");
    todoDiv.appendChild(todoForm);
    todoForm.appendChild(newTodoTitleLabel);
    todoForm.appendChild(newTodoTitleInput);
    todoForm.appendChild(submitButton);
}

export {addNewTodo};
