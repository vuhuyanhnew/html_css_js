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

    addToDo(toDo) {
        const existingToDo = this.toDos.find(item => item.date == toDo.date);

        if (existingToDo) {
           console.log("Existed work!")
        } else {
            this.toDos.push(toDo);
        }
    }
}
const todoList = new ToDoList();

const todo1 = new ToDo("2023-09-15");
todo1.addWork("work A");
todo1.addWork("work B");

const todo2 = new ToDo("2023-09-16");
todo1.addWork("work C");
todo1.addWork("work E");

const todo3 = new ToDo("2023-09-16");
todo1.addWork("work F");
todo1.addWork("work G");
todoList.addToDo(todo1)
todoList.addToDo(todo2)
console.log(todoList)