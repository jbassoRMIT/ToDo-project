//import toDo class
import { ToDo } from "./toDo.js";

//import removeChildren function from helper file
import { removeChildren } from "./helperFunctions.js";

//import tasks array
import { tasks } from "./todoArray.js";

//try and move display to Do function to its own function
const displayTodo=function(){
    const displayTodo=document.querySelector(".displayTodo");

    //clear contents of displayTodo div
    removeChildren(displayTodo);

    //create table inside display div
    const displayTodoTable=document.createElement("table");
    const tableHeaderRow=document.createElement("tr");
    const titleHeader=document.createElement("th");
    titleHeader.textContent="title";
    const descriptionHeader=document.createElement("th");
    descriptionHeader.textContent="Description";
    const dateHeader=document.createElement("th");
    dateHeader.textContent="Due date";
    const priorityHeader=document.createElement("th");
    priorityHeader.textContent="Priority";

    displayTodo.appendChild(displayTodoTable);
    displayTodoTable.appendChild(tableHeaderRow);
    tableHeaderRow.appendChild(titleHeader);
    tableHeaderRow.appendChild(descriptionHeader);
    tableHeaderRow.appendChild(dateHeader)
    tableHeaderRow.appendChild(priorityHeader);

    
    //iterate over tasks, creating an li  element and appending to div
    for(let task of tasks){
        const taskInfo=document.createElement("li");
        taskInfo.textContent=`task: ${task.description}, due: ${task.dueDate}`;

        //add class info for conditional formatting based on priority
        if(task.priority=="High"){
            taskInfo.classList.add("highPriority");
            taskInfo.classList.remove("mediumPrioity");
            taskInfo.classList.remove("lowPrioity");
        }
        else if(task.priority=="Medium"){
            taskInfo.classList.add("mediumPriority");
            taskInfo.classList.remove("highPriority");
            taskInfo.classList.remove("lowPriority");
        }
        else if(task.priority=="Low"){
            taskInfo.classList.add("lowPriority");
            taskInfo.classList.remove("highPriority");
            taskInfo.classList.remove("mediumPriority");
        }
        displayTodoList.appendChild(taskInfo);
    }
    
}

export {displayTodo};


