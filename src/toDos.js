// 1 - clase toDo, que acepte el valor de los inputs de Tutiulo, Descripcion, Fecha y Prioridad
// 2 - que la clase tenga propiedades de agregar todo, eliminar item, cambiar prioridad de todo, setear todo como completo, etc

export default class toDoItem {
    constructor(title, desc, date, divTareas) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.divTareas = divTareas;
    }
    crearToDo(divTareas) {
        divTareas.innerHTML += `
            <div class="tarea">
            <h1>${this.title}</h1>
            <p>${this.desc}</p>
            <span>${this.date}</span>
            <inpit type="checkbox"></inpit>
        </div>`
    }
}

