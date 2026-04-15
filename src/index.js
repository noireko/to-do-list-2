const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const btnSubmit = document.getElementById("btn-submit");
const divTareas = document.getElementById("div-tareas")

import "./style.css"
import toDoItem from "./toDos.js"

btnSubmit.addEventListener("click", () => {
    const tarea = new toDoItem(
        title.value,
        desc.value,
        date.value
    );
    tarea.crearToDo(divTareas);
    title.value = "";
    desc.value = "";
    date.value = "";
})