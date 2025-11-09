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
    newTodoTitleInput.setAttribute("required","");
    newTodoTitleInput.type="text";
    newTodoTitleLabel.textContent="Name of new task: ";

    //description
    const newTodoDescriptionLabel=document.createElement("label");
    const newTodoDescriptionInput=document.createElement("input");
    newTodoDescriptionInput.setAttribute("required","");
    newTodoDescriptionInput.type="text";
    newTodoDescriptionLabel.textContent="Description of new task: ";

    //due date
    const newTodoDateLabel=document.createElement("label");
    const newTodoDateInput=document.createElement("input");
    newTodoDateInput.setAttribute("required","");
    newTodoDateInput.type="date";
    newTodoDateLabel.textContent="Due date of new task: ";

    //priority
    const newTodoPriorityLabel=document.createElement("label");
    const newTodoPrioritySelect=document.createElement("select");
    newTodoPrioritySelect.setAttribute("required","");
    newTodoPrioritySelect.name="priority";
    newTodoPrioritySelect.name="priority"
    newTodoPriorityLabel.textContent="Priority: ";
    const newTodoPriorityHigh=document.createElement("option");
    newTodoPriorityHigh.textContent="High";
    newTodoPriorityHigh.value="High";
    const newTodoPriorityMedium=document.createElement("option");
    newTodoPriorityMedium.textContent="Medium";
    newTodoPriorityMedium.value="Medium";
    newTodoPriorityMedium.selected=true;
    const newTodoPriorityLow=document.createElement("option");
    newTodoPriorityLow.textContent="Low";
    newTodoPriorityLow.value="Low";

    //isCompleted
    const newTodoCompletedLabel=document.createElement("label");
    const newTodoCompletedInput=document.createElement("input");
    newTodoCompletedInput.type="radio";
    newTodoCompletedInput.name="completed";
    newTodoCompletedInput.id="completed";
    newTodoCompletedInput.value="completed";
    newTodoCompletedLabel.for="completed";
    newTodoCompletedLabel.textContent="completed";

    const newTodoNotCompletedLabel=document.createElement("label");
    const newTodoNotCompletedInput=document.createElement("input");
    newTodoNotCompletedInput.type="radio";
    newTodoNotCompletedInput.name="completed";
    newTodoNotCompletedInput.id="notCompleted";
    newTodoNotCompletedInput.value="notCompleted";
    newTodoNotCompletedInput.checked=true;
    newTodoNotCompletedLabel.for="notCompleted";
    newTodoNotCompletedLabel.textContent="Not completed";

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
    todoForm.appendChild(newTodoCompletedLabel);
    todoForm.appendChild(newTodoCompletedInput);
    todoForm.appendChild(newTodoNotCompletedLabel);
    todoForm.appendChild(newTodoNotCompletedInput);
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
        let newIsCompleted=false;
        if(newTodoCompletedInput.checked){
            newIsCompleted=true;
        }

        const newTodo=new ToDo(newTitle,newDescription,newDate,newPriority,newIsCompleted);
        tasks.push(newTodo);

        console.log(newPriority);
        console.log(newTodoCompletedInput.checked);


        //call displayTodo function
        displayTodo();
    })
}
    
    

export {addNewTodo};
