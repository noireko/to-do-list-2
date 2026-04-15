// 1 - clase toDo, que acepte el valor de los inputs de Tutiulo, Descripcion, Fecha y Prioridad
// 2 - que la clase tenga propiedades de agregar todo, eliminar item, cambiar prioridad de todo, setear todo como completo, etc

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const completed = document.getElementById("completed");
const btnSubmit = document.getElementById("btn-submit");

class toDoItem {
    constructor(title, desc, date, completed) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.completed = completed;
    }
}