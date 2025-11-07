//import toDo class
import { ToDo } from "./toDo.js";

//import removeChildren function from helper file
import { removeChildren } from "./helperFunctions.js";

//test object creation
const task1=new ToDo("water plants","get the house out and water the garden","10/11/25","High");
const task2=new ToDo("laundry","wash clothes","12/11/25","Medium");
const task3=new ToDo("pay fine","pay my overdue ptv fine","14/11/25","Low");


//setup tasks as an array of task objects, and push task 1 and 2 now for testing
const tasks=[task1,task2,task3];

export {tasks};