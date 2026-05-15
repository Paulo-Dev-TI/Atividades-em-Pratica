

let etanol = 1.50

function calculo(num1){
    let result = 100 / num1

  if(Math.floor(result) <= 70){
    console.log("Etanol Compensa!")
    
  }else{
    console.log("Gasolina Compensa!")
  }
}
calculo(etanol)

