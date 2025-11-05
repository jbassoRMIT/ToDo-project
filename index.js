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

const body=document.querySelector("body");
const taskInfo=document.createElement("p");
taskInfo.textContent=`task: ${task1.description}, due: ${task1.dueDate}`;
body.appendChild(taskInfo);