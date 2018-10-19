
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

let cont = 1;
var bitacoras = [];
let formulario = document.getElementById("bitacora");

//evento submit
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
    }
    if ( formulario[1].value === "" || formulario[2].value === "" || formulario[3].value === "" ){
        formulario[1].style.borderColor = "red";
        formulario[2].style.borderColor = "red";
        formulario[3].style.borderColor = "red";
    } else {
        formulario[1].style.borderColor = "green";
        formulario[2].style.borderColor = "green";
        formulario[3].style.borderColor = "green";
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

//eliminar nodo
const eliminar = (tbody) => {
    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}


const agregar = ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 


   const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

/*
¿Qué contienen la variable formulario ? 
    contiene una referencia a los elementos de la etiqueta con el id "Bitacora";

¿Qué hace el método evt.preventDefault() ? 
    Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, por ejemplo,
    podría evitar que un texto inválido entre en un campo.

¿Qué es lo que contiene formulario[x]? 
    El valor que se le ingrese en la caja de texto.

¿Qué contienen las variables tr y td ?
    tr es una variable que creamos que contiene una nueva fila en la tabla
    td es una variable que creamos que sirve para las columnas con la información en la tabla

¿Qué contienen la variable content ?
    es una variable que contendrá los string/cadenas de texto que se están recorriendo con el foreach

¿Qué valor tendrá tbody al finalizar la iteración?
    tendrá el último nodo a agregar como hijo de tbody.

Describa en pocas palabras lo que realizara esta función const eliminar = (tbody) => {
    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
    irá iterando con las referencias de los hijos de tbody y los va removiendo 

¿Qué es lo que hace .firstChild?
    retorna el primer hijo del primer nodo que encuentre en el árbol, si el nodo es document retorna
    el primer nodo en la lista de sus hijos directos.

Después de realizar el while ¿Comó quedara el elemento tbody ?
    vacío.

¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; 


¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?


¿Qué hace el método childElementCount?


¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?


¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? 


*/