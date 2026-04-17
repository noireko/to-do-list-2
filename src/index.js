const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const btnSubmit = document.getElementById("btn-submit");
const divTareas = document.getElementById("div-tareas")
const delBtn = document.getElementById("delBtn")

import "./style.css"
import toDoItem from "./toDos.js"
import { tareas } from "./toDos.js"

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const tarea = new toDoItem(
        title.value,
        desc.value,
        date.value
    );

    tareas.push(tarea.crearToDo)

    title.value = "";
    desc.value = "";
    date.value = "";

    divTareas.innerHTML = tareas;
    tarea.render(divTareas)

});