let contador = 0;

let padre = document.getElementById("padre");
let listaPadre = document.getElementsByClassName("listaPadre");
let itemLista = document.getElementsByClassName("itemLista");
let btnCheck = document.getElementsByClassName("check");

//Funcion para agregar una tarea a la lista y dejar el  input vacio
function agregarTarea() {
  let tarea = document.getElementById("tarea");

  if (contador < 27 && tarea.value != "") {
    itemLista[contador].innerHTML += tarea.value;
    tarea.value = "";
    tarea.focus();
    contador++;
  }
}

//Funcion para sacar una tarea de la lista y mover las siguientes para que no queden espacios vacios
function tareaFinalizada() {
    
  //Variable que almacena el id (nro de posicion) del boton apretado
  let id = parseInt(event.srcElement.id);

  //Elimina un item de la lista en el caso de que la misma no este vacia
  if (
    itemLista[id].innerHTML !==
    `<button class="btn btn-light py-0 px-1 me-2 border border-2 check" id="${id}" onclick="tareaFinalizada()">✓</button>`
  ) {

    //Loop que mueve todos los elementos de la lista despues del eliminado una posicion mas arriba
    for (let i = id; i < itemLista.length - 1; i++) {
      let idSiguiente = i + 1;

      itemLista[i].innerHTML = itemLista[idSiguiente].innerHTML;

      btnCheck[i].id = i;
    }

    // //Agrega el ultimo item de la lista vacio
    itemLista[
      itemLista.length - 1
    ].innerHTML = `<button class="btn btn-light py-0 px-1 me-2 border border-2 check" id="${
      itemLista.length - 1
    }" onclick="tareaFinalizada()">✓</button>`;

    contador--;
  }
}
