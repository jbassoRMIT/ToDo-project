//import styles 
import "./styles.css";

//import greeting to test
import {greeting} from "./greeting.js";

console.log(greeting);

console.log("hello world!");


//create object of ToDOs
class ToDo{
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }
}

//test object creation
const task1=new ToDo("water plants","get the house out and water the garden","10/11/25","high");

const displayTodo=document.querySelector(".displayTodo");
const taskInfo=document.createElement("p");
taskInfo.textContent=`task: ${task1.description}, due: ${task1.dueDate}`;
displayTodo.appendChild(taskInfo);

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

