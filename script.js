function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

   let textoCifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "ines")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
if (texto.length !=0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    imagen.src = "./Assets/correcto2.jpg";
} else {
    imagen.src = "./Assets/incorrecto.jpg";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert ("Debes ingresar algun texto");
}
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    
    let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/ines/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./Assets/correcto.jpg";
} else {
        imagen.src = "./Assets/incorrecto.jpg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar algun texto");
    }
    }

