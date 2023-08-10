function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result1= num1 + num2; 
    var elemento = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {return}

    elemento.innerHTML = "Aqui tu resutado:" + result1;
    console.log("Se hizo una suma");
    if (num1 >= 0 && num2 >= 0 ) {
        elemento.style.color = "blue";
    }
    
} 
function restar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result2= num1 - num2; 
    var elemento = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {return}    
    
    elemento.innerHTML = "Aqui tu resutado:" + result2;
    console.log("Se hizo una resta");
    if (num1  >= 0 && num2 >= 0 ) {
        elemento.style.color = "skyblue";
    }
    
}
function multiplicar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result3= num1 * num2; 
    var elemento = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {return}
    
    elemento.innerHTML = "Aqui tu resutado:" + result3;
    console.log("Se hizo una multiplicacion");
   
    if (num1 >= 0 && num2 >= 0 ) {
        elemento.style.color = "orange";
    }
    
}
function dividir() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result4 = num1 / num2; 
    var elemento = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {return}
    
    elemento.innerHTML = "Aqui tu resutado:" + result4;
    console.log("Se hizo una division");
    
    if (num1 >= 0 && num2 >= 0 ) {
        elemento.style.color = "green";
    }
    
}


console.log("Interacciones en la pagina:");

//COMENTARIOS//
function agregarComentario() {
    var comentarioInput = document.getElementById("comentario").value.trim();

    if (comentarioInput === "") {
        alert("No ingresaste ningún comentario");
        return;
    }
    
    console.log("Se introdujo un comentario");
    
  
    
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
   
    var nuevoComentario = document.createElement("div");
  
   
    nuevoComentario.innerHTML = comentarioInput;
  
    
    nuevoComentario.classList.add("comentario");
  
 
    contenedorComentarios.appendChild(nuevoComentario);
  
    
    document.getElementById("comentario").value = "";
    var elemento = document.getElementById("Gracias");
    elemento.innerHTML = "¡¡Gracias, aun puedes comentar!!";

}
  

  
