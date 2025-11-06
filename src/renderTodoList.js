//import toDo class
import { ToDo } from "./toDo.js";

//test object creation
const task1=new ToDo("water plants","get the house out and water the garden","10/11/25","high");
const task2=new ToDo("laundry","wash clothes","12/11/25","medium");
const task3=new ToDo("pay fine","pay my overdue ptv fine","14/11/25","low");


//setup tasks as an array of task objects, and push task 1 and 2 now for testing
const tasks=[task1,task2,task3];

//try and move display to Do function to its own function
const displayTodo=function(){
    const displayTodo=document.querySelector(".displayTodo");
    const displayTodoList=document.createElement("ul");

    displayTodo.appendChild(displayTodoList);
    
    //iterate over tasks, creating an li  element and appending to div
    for(let task of tasks){
        const taskInfo=document.createElement("li");
        taskInfo.textContent=`task: ${task.description}, due: ${task.dueDate}`;
        displayTodoList.appendChild(taskInfo);
    }
    
}

export {displayTodo};


