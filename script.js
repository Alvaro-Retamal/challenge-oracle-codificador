function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var textocifrado = texto.replace(/e/img,"enter")
    var textocifrado = textocifrado.replace(/i/img,"imes")
    var textocifrado = textocifrado.replace(/a/img,"ai")
    var textocifrado = textocifrado.replace(/o/img,"ober")
    var textocifrado = textocifrado.replace(/u/img,"ufat")
    document.getElementById("muheco").style.display = "none";
    document.getElementById("mensaje-ningun").style.display = "none";
    document.getElementById("texto2").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var textocifrado = texto.replace(/enter/img,"e")
    var textocifrado = textocifrado.replace(/imes/img,"i")
    var textocifrado = textocifrado.replace(/ai/img,"a")
    var textocifrado = textocifrado.replace(/ober/img,"o")
    var textocifrado = textocifrado.replace(/ufat/img,"u")
    document.getElementById("muheco").style.display = "none";
    document.getElementById("mensaje-ningun").style.display = "none";
    document.getElementById("texto2").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copied!");
}