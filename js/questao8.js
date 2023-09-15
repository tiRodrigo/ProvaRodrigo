function verificar() {
    var num4 = parseInt(document.getElementById('pi').value)
    if (num4 % 2 == 0) {
        document.getElementById('resultado').innerHTML = `Número par`
    } else {
        document.getElementById('resultado').innerHTML =`Número ímpar`
    }
}