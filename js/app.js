let contador = 0;
let padre = document.getElementById("padre");
let listaPadre = document.getElementsByClassName("listaPadre");
let itemLista = document.getElementsByClassName("itemLista");
let btnCheck = document.getElementsByClassName("check");

function agregarTarea() {
    let tarea = document.getElementById("tarea").value;

    if(contador < 27) {
        itemLista[contador].innerHTML += tarea;
        contador++;
    }
}



function tareaFinalizada() {
    let id = parseInt(event.srcElement.id);

    if(itemLista[id].innerHTML !== `<button class="btn btn-light py-0 px-1 me-2 border border-2 check" id="${id}" onclick="tareaFinalizada()">✓</button>`) {
        
        for (let i = id; i < itemLista.length-1; i++) {
            let idSiguiente = i + 1;
            
            itemLista[i].innerHTML = itemLista[idSiguiente].innerHTML;
            
            btnCheck[i].id = i;
        }
        
        itemLista[itemLista.length-1].innerHTML = `<button class="btn btn-light py-0 px-1 me-2 border border-2 check" id="${itemLista.length-1}" onclick="tareaFinalizada()">✓</button>`
        contador--;     

    }
}