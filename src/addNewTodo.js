const addNewTodo=function(){
    //Display a form to get user to add new todo
    const todoForm=document.createElement("form");

    //title
    const newTodoTitleLabel=document.createElement("label");
    const newTodoTitleInput=document.createElement("input");
    newTodoTitleInput.type="text";
    newTodoTitleLabel.textContent="Name of new task: ";

    //description
    const newTodoDescriptionLabel=document.createElement("label");
    const newTodoDescriptionInput=document.createElement("input");
    newTodoDescriptionInput.type="text";
    newTodoDescriptionLabel.textContent="Description of new task: ";

    //due date
    const newTodoDateLabel=document.createElement("label");
    const newTodoDateInput=document.createElement("input");
    newTodoDateInput.type="text";
    newTodoDateLabel.textContent="Due date of new task: ";

    //Create submit button
    const submitButton=document.createElement("button");
    submitButton.type="submit";
    submitButton.textContent="Submit";

    //assemmble in appropriate order
    const todoDiv=document.querySelector(".newToDo");
    todoDiv.appendChild(todoForm);
    todoForm.appendChild(newTodoTitleLabel);
    todoForm.appendChild(newTodoTitleInput);
    todoForm.appendChild(document.createElement("br"));
    todoForm.appendChild(newTodoDescriptionLabel);
    todoForm.appendChild(newTodoDescriptionInput);
    todoForm.appendChild(document.createElement("br"));
    todoForm.appendChild(newTodoDateLabel);
    todoForm.appendChild(newTodoDateInput);
    todoForm.appendChild(document.createElement("br"));
    todoForm.appendChild(submitButton);
}
    
    

export {addNewTodo};
