function validaNumero(){
    var numero = document.getElementById("numero").value;
    if(numero>0){
      document.getElementById('resultado').innerHTML= "O número é positivo!"
    }else if(numero <0){
      document.getElementById('resultado').innerHTML= "O número é negativo!"
    }else{
      document.getElementById('resultado').innerHTML= "O número é nulo"
    }
}