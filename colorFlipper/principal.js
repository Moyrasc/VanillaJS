"use strict";
//creo array con colores

var color = ["red","blue","green","pink","orange","grey"];
var indice = 0;

// cada vez que pulso botón cambio el color del main

var button = document.querySelector("button");

var main = document.querySelector("main");

//cambia el texto de span por el color asignado
var span = document.querySelector("span");
console.dir(span);


button.addEventListener("click", ()=> {
    main.style.backgroundColor = color[indice];
    span.textContent = color[indice];
    indice++;
    if(indice>color.length-1){
        indice=0;
    }
    
    
})

