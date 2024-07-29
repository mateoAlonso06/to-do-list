"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector("#btn-agregar");
    const lista = document.querySelector("#lista-tareas");

    const tareas = [];

    btnAgregar.addEventListener("click", () => {
        let tarea = document.querySelector("#tarea");
        
        tareas.push(tarea.value);
        tarea.value = "";
        
        actualizarLista();
    });

    function actualizarLista() {
        lista.innerHTML = "";

        tareas.forEach((tareaActual, indice) => {
            const liItem = document.createElement("li");
            liItem.textContent = tareaActual;
            lista.appendChild(liItem);

            const btnEditar = document.createElement("button");
            const btnEliminar = document.createElement("button");

            // genero una imagen de edicion y la asocio al boton
            const imgEditar = document.createElement("img");
            imgEditar.src = "./images/editar.png";
            imgEditar.alt = "Editar";
            btnEditar.appendChild(imgEditar);
            btnEditar.addEventListener("click", () => editarTarea(indice));

            // genero una imagen de borrado y la asocio al boton
            const imgBorrar = document.createElement("img");
            imgBorrar.src = "./images/borrar.png";
            imgBorrar.alt = "Eliminar";
            btnEliminar.appendChild(imgBorrar);
            btnEliminar.addEventListener("click", () => eliminarTarea(indice));

            const contenedorImg = document.createElement("div");
            contenedorImg.classList.add("contenedor-img");
            contenedorImg.appendChild(btnEditar);
            contenedorImg.appendChild(btnEliminar);

            const contenedorTotal = document.createElement("div");
            contenedorTotal.classList.add("tarea-individual");
            contenedorTotal.appendChild(liItem);
            contenedorTotal.appendChild(contenedorImg);

            lista.appendChild(contenedorTotal);
        });
    }

    function editarTarea(indice) {
        const nuevaTarea = prompt("Editar la tarea: ", tareas[indice]);
        if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
            tareas[indice] = nuevaTarea;
            actualizarLista();
        }
    }

    function eliminarTarea(indice) {
        tareas.splice(indice, 1);
        actualizarLista();
    }
});
