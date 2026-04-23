import "./style.css";
import toDoItem, { tareas } from "./toDos.js";

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const btnSubmit = document.getElementById("btn-submit");
const divTareas = document.getElementById("div-tareas");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const tarea = new toDoItem(
        title.value,
        desc.value,
        date.value
    );

    // 👉 guardamos el objeto, no HTML
    tareas.push(tarea);

    // limpiar inputs
    title.value = "";
    desc.value = "";
    date.value = "";

    // renderizar todo
    tarea.render(divTareas);
});