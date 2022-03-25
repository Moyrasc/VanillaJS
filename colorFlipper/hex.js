"use srtict";
//me traigo etiquetas boton, span y main

var boton = document.querySelector("button");
var span = document.querySelector("span");
var main = document.querySelector("main");

// ejemploHexadecimal: "#"
// creo un array que contenga los nº del 0-9 y las letras de la a-f

const hexadecimal= [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];


//creo una función que elija aleatoreamente 1 caracter


function aleatoria(){
    return Math.floor(Math.random() * hexadecimal.length)
}





boton.addEventListener("click", ()=>{
    
    // el color hexadecimal siempre empezará por # por lo tanto creo una variable de la siguiente manera:
    let numberHex= "#";
    // creo un bucle para que me genere los 6 caracteres cada vez que hago click
    for (let i=0; i<6; i++){
    let numeroAleatorio = aleatoria();
    numberHex = numberHex + hexadecimal[numeroAleatorio]
    //numberHex+= hexadecimal[numeroAletorio] seria simplificando

    }
    span.textContent = numberHex;
    main.style.backgroundColor = numberHex;
})

