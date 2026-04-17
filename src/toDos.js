// 1 - clase toDo, que acepte el valor de los inputs de Tutiulo, Descripcion, Fecha y Prioridad
// 2 - que la clase tenga propiedades de agregar todo, eliminar item, cambiar prioridad de todo, setear todo como completo, etc

let tareas = []

export default class toDoItem {
    constructor(title, desc, date, divTareas) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.divTareas = divTareas;
    }
    crearToDo() {
        return tareas.push(`
            <div class="tarea">
            <h1>${this.title}</h1>
            <p>${this.desc}</p>
            <span>${this.date}</span>
            <input type="checkbox"></input>
        </div>`)
    }
    render(divTareas) {
        divTareas.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const container = document.createElement("div");

            const texto = document.createElement("div");
            texto.textContent = tarea;

            const btn = document.createElement("button");
            btn.textContent = "Delete";

            btn.addEventListener("click", () => {
                this.eliminarToDo(index);
            });

            container.appendChild(texto);
            container.appendChild(btn);
            divTareas.appendChild(container);
        });
        return
    }
    eliminarToDo(index) {
        tareas.splice(index, 1);
        this.render();
    }
}

export { tareas };
