function promo() {
    var valorConta = parseInt(document.getElementById('val1').value)
    var eu20 = 0.2
    var valorPromo = valorConta * eu20
    var final = valorConta - valorPromo
    valorPromo = valorPromo.toFixed(2)
    switch(eu20){
        case eu20:
            document.getElementById('resultado').innerHTML = ` Você ganhou ${valorPromo} de desconto! Seu produto ficou ${final} R$`;
            break
            case eu20 != eu20:
                document.getElementById('resultado').innerHTML = 'Código Invalido'
                break
   
        
    }
}