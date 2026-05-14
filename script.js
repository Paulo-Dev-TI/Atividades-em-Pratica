function verificar(){
    let numero = document.getElementById("numero").value ;
    
    if(numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O numero é par"
    }else {
        document.getElementById("resultado").innerHTML = "O numero é impar"
    }
}
