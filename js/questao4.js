function converter() {


    var numero = parseInt(document.getElementById("numeros").value);
    var unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

    if (numero >= 0 && numero <= 19) {
        document.getElementById("resultado").innerHTML =`O numéro ${numero} por extenso é ${ unidades[numero]}`;
    } else {


        document.getElementById("resultado").innerHTML = "Número fora do intervalo suportado";
    }
}

