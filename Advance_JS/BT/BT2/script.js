class ToDo {
    constructor(date) {
        this.date = date;
        this.works = [];
    }

    addWork(work) {
        this.works.push(work);
    }
}

class ToDoList {
    constructor() {
        this.toDos = [];
    }
} 
const todoList = new ToDoList();

const todo1 = new ToDo("2023-09-15");
todo1.addWork("work A");
todo1.addWork("work B");