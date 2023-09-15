function verificar() {
    const idade = parseInt(document.getElementById("nu1").value);
    
    switch (true) {
        case idade <= 12:
            document.getElementById('resultado').innerHTML = 'Ainda é uma criança';
            break;
        case idade >= 13 && idade <= 17:
            document.getElementById('resultado').innerHTML = 'adolescente';
            break
        case idade >= 18 && idade <= 64:
            document.getElementById('resultado').innerHTML = 'Adulto';
            break

        case idade >= 65:
            document.getElementById('resultado').innerHTML = 'Idoso';
            break
    }
}
