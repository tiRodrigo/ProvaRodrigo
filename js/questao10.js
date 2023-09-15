function dias() {
    const dia = parseInt(document.getElementById('sig').value)
    const mes = parseInt(document.getElementById('sig1').value)

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        document.getElementById('resultado').innerHTML = "Áries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        document.getElementById('resultado').innerHTML = "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        document.getElementById('resultado').innerHTML = "Gêmeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        document.getElementById('resultado').innerHTML = "Câncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        document.getElementById('resultado').innerHTML = "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        document.getElementById('resultado').innerHTML = "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        document.getElementById('resultado').innerHTML = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        document.getElementById('resultado').innerHTML = "Escorpião";
    }

    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        document.getElementById('resultado').innerHTML = "Sagitário";
    }

}