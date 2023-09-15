function notas() {
    var nota1 = parseInt(document.getElementById('nota1').value)
    var nota2 = parseInt(document.getElementById('nota2').value)
    var nota3 = (nota1 + nota2) / 5
    document.getElementById('resultado').innerHTML = `A média da sua nota é ${nota3}`
  }
  