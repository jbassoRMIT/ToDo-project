//function to toggle the completed status
import check from "./check.svg";
import cross from "./cross.svg";

const toggleCompletedStatus=function(task,image,taskRow){
    task.isCompleted=!task.isCompleted;
    if(task.isCompleted){
        image.src=check;
        taskRow.classList.add("completed");
    }
    else{
        image.src=cross;
        taskRow.classList.remove("completed");
    }
}

export {toggleCompletedStatus};