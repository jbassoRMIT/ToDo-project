//import todo class
import { ToDo } from "./toDo.js";

//import tasks array
import { tasks } from "./todoArray.js";

//import displayTodo function
import { displayTodo } from "./renderTodoList.js";

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
    newTodoDateInput.type="date";
    newTodoDateLabel.textContent="Due date of new task: ";

    //priority
    const newTodoPriorityLabel=document.createElement("label");
    const newTodoPrioritySelect=document.createElement("select");
    newTodoPrioritySelect.name="priority"
    newTodoPriorityLabel.textContent="Priority: ";
    const newTodoPriorityHigh=document.createElement("option");
    newTodoPriorityHigh.textContent="High";
    newTodoPriorityHigh.value="High";
    const newTodoPriorityMedium=document.createElement("option");
    newTodoPriorityMedium.textContent="Medium";
    newTodoPriorityMedium.value="Medium";
    const newTodoPriorityLow=document.createElement("option");
    newTodoPriorityLow.textContent="Low";
    newTodoPriorityLow.value="Low";

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
    todoForm.appendChild(newTodoPriorityLabel);
    todoForm.appendChild(newTodoPrioritySelect);
    newTodoPrioritySelect.appendChild(newTodoPriorityHigh);
    newTodoPrioritySelect.appendChild(newTodoPriorityMedium);
    newTodoPrioritySelect.appendChild(newTodoPriorityLow);
    todoForm.appendChild(document.createElement("br"));
    todoForm.appendChild(submitButton);

    //submit handler for form
    todoForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        //create new toDo based off inputs
        const newTitle=newTodoTitleInput.value;
        const newDescription=newTodoDescriptionInput.value;
        const newDate=newTodoDateInput.value;
        const newPriority=newTodoPrioritySelect.value;

        const newTodo=new ToDo(newTitle,newDescription,newDate,newPriority);
        tasks.push(newTodo);

        console.log(newPriority)


        //call displayTodo function
        displayTodo();
    })
}
    
    

export {addNewTodo};
