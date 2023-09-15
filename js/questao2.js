function calcular() {
    var n1 = parseInt(document.getElementById("n1").value)
    var n2 = parseInt(document.getElementById("n2").value)

    selector = document.getElementById('selector').value

    switch (selector) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O Resultado da Soma de ${n1} + ${n2} é  = ${calculo}`;
            break
        case '-':
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O Resultado da Subtração de ${n1} - ${n2} é  = ${calculo}`;
            break
        case '*':
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O Resultado da Multiplicação de ${n1} X ${n2} é  = ${calculo}`;
            break

        case '/':
            calculo = (n1 / n2)
            document.getElementById('resultado').innerHTML = `O Resultado da Divisão de ${n1} / ${n2} é  = ${calculo}`;
            break
    }
}
