// 1 - clase toDo, que acepte el valor de los inputs de Tutiulo, Descripcion, Fecha y Prioridad
// 2 - que la clase tenga propiedades de agregar todo, eliminar item, cambiar prioridad de todo, setear todo como completo, etc

let tareas = [];

export default class toDoItem {
    constructor(title, desc, date) {
        this.title = title;
        this.desc = desc;
        this.date = date;
    }

    render(divTareas) {
        divTareas.innerHTML = "";

        tareas.forEach((tarea, index) => {
            const container = document.createElement("div");
            container.classList.add("tarea");

            const titulo = document.createElement("h2");
            titulo.textContent = tarea.title;

            const descripcion = document.createElement("p");
            descripcion.textContent = tarea.desc;

            const fecha = document.createElement("span");
            fecha.textContent = tarea.date;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const btn = document.createElement("button");
            btn.textContent = "Delete";

            btn.addEventListener("click", () => {
                this.eliminarToDo(index, divTareas);
            });

            container.appendChild(titulo);
            container.appendChild(descripcion);
            container.appendChild(fecha);
            container.appendChild(checkbox);
            container.appendChild(btn);

            divTareas.appendChild(container);
        });
    }

    eliminarToDo(index, divTareas) {
        tareas.splice(index, 1);
        this.render(divTareas);
    }
}

export { tareas };