function calculo() {
    const dias = parseInt(document.getElementById('dia').value)
    switch (dias) {
        case 1:
            document.getElementById('resultado').innerHTML = "Domingo"
            break
        case 2:
            document.getElementById('resultado').innerHTML = "Segunda-Feira"
            break
        case 3:
            document.getElementById('resultado').innerHTML = "Terça-feira"
            break
        case 4:
            document.getElementById('resultado').innerHTML = "Quarta-feira"
            break
        case 5:
            document.getElementById('resultado').innerHTML = "Quinta-feira"
            break
        case 6:
            document.getElementById('resultado').innerHTML = "Sexta-Feira"
            break
        case 7:
            document.getElementById('resultado').innerHTML = "sabado"
            break
        case dias <= 0 && dias >= 8:
            document.getElementById('resultado').innerHTML = "Digite um número de 1 a 7"
            break




    }

}