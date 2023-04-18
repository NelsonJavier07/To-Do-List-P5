let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");



class Item {
    constructor(tarea){
        this.crearDiv(tarea)
    }

    crearDiv(tarea){

        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = tarea;
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");
        
        container.append(nuevoDiv);
        
    
        
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "🔒";
        botonEditar.classList.add("boton-editar");
        
        
        
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "🗑";
        botonRemover.classList.add("boton-remover");
        
        nuevoDiv.append(inputItem);
        nuevoDiv.append(botonEditar);
        nuevoDiv.append(botonRemover);


        botonEditar.addEventListener("click", function () {
            
            if (inputItem.disabled === true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "🔓";
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = "🔒";
            }
        });

        botonRemover.addEventListener("click", function () {
            container.removeChild(nuevoDiv);
        });
    }
}
botonAgregar.addEventListener("click", function () {
    chequearInput();
    input.value = "";
})

function chequearInput() {
    if (input.value !== "") {
        new Item (input.value);
        console.log(input.value);
    } else {
        alert("Debes incluir una tarea!");
    }
    input.value = "";
}






