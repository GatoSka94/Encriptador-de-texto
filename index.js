function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let reposo = document.getElementById("reposo");


    let textoEncriptado = texto
        .replace(/a/gi, "4")
        .replace(/A/gi, "4")
        .replace(/e/gi, "3")
        .replace(/E/gi, "3")
        .replace(/i/gi, "1")
        .replace(/I/gi, "1")
        .replace(/o/gi, "0")
        .replace(/O/gi, "0")
        .replace(/u/gi, "8")
        .replace(/U/gi, "8");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        reposo.src = "./Imagenes/encriptado.png";
    } else {
        reposo.src = "./Imagenes/reposo.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Algo falta!", "Debes ingresar algun texto", "warning");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let reposo = document.getElementById("reposo");

    let textoEncriptado = texto
        .replace(/4/gi, "a")
        .replace(/3/gi, "e")
        .replace(/1/gi, "i")
        .replace(/0/gi, "o")
        .replace(/8/gi, "u");
        
    if (texto.length != 0) {
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        reposo.src = "./Imagenes/desencriptado.png";
    } else {
        reposo.src = "./Imagenes/reposo.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Algo falta!", "Debes ingresar algun texto", "warning");
    }

}