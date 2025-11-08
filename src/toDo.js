//class constructor for a todo object
class ToDo{
    constructor(title,description,dueDate,priority,isCompleted){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.isCompleted=isCompleted;
    }
}

export {ToDo};