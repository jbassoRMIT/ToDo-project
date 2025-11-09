//class constructor for a todo object, each todo needs a unique ID
class ToDo{
    constructor(title,description,dueDate,priority,isCompleted){
        this.id=crypto.randomUUID();
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.isCompleted=isCompleted;
    }
}

export {ToDo};