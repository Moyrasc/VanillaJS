'use strict';
// click boton increase suma 1
//click boton decrease resta 1
// p muestra valor y cambia color positivo verde,negativo rojo
//reset reinicia contador
const contador = document.querySelector("p");
const botonReset = document.querySelector(".reset");
const botonIncrease = document.querySelector(".increase");
const botonDecrease = document.querySelector(".decrease");
let numero = 0;





botonIncrease.addEventListener("click", ()=>{
    numero++;
    // contador.textContent=numero;
    // if (numero > 0) {
    //     contador.style.color="green";
    // }
    changeColor()
    
})


botonDecrease.addEventListener("click", ()=>{
    numero--;
    // contador.textContent=numero;
    // if (numero < 0) {
    //     contador.style.color="red";
    // }
    changeColor();
   
    
})

botonReset.addEventListener("click",()=>{
    numero = 0;
    // contador.textContent=numero;
    // contador.style.color="black";
    changeColor();
})

function changeColor(){
    contador.textContent = numero
    if (numero == 0){
        contador.style.color = 'black'
    }else if(numero>0){
        contador.style.color = 'green'
    }else{
        contador.style.color = 'red'
    }
}



