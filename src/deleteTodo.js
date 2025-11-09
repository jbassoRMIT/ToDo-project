//function to delete a todo
const deleteTodo=function(tasks,task,taskRow){
    //delete from the array
    let index=-1;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id==task.id){
            index=i;
        }
    }

    if(index>=0){
        tasks.splice(index,1);
    }

    //remove row from dom
    taskRow.remove();
}

export {deleteTodo};
