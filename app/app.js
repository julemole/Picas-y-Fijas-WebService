const express = require('express')
const app = express()
const port = 3000

var rand = obtenerRand();

app.get('/', (req, res) => {
  const x=req.query.num
  const y=rand
  num1 = parseInt(x / 1000);
  num2 = parseInt((x % 1000) /100);
  num3 = parseInt(((x % 1000) % 100) /10);
  num4 = ((x % 1000) %100) % 10;

  if (x==y) {
    res.send('Correcto, el número era: '+rand)
  }else{
    if(num1==num2 || num1==num3 || num1==num4 || num2==num3 || num2==num4 || num3==num4){
      res.send('Los digitos del número deben ser diferentes entre sí')
    }
    if(isNaN(x)){
      res.send("El valor digitado debe ser un número");
    }
    if(x < 1000 || x > 9999){
      res.send("El valor digitado debe ser un número de 4 digitos");
    }
    else{
      var valor = x.toString();
      var enigm = rand.toString();
      var fijas = 0;
      var picas = 0;
      
      for(var i = 0; i < 4; i++){
        if(valor[i] == enigm[i]){
          fijas++;
        }
        for(var j = 0; j < 4; j++){
          if(i != j && valor[i] == enigm[j]){
            picas++;
          }
        }
      }
    res.send("\n Fijas: " + fijas + " Picas: " + picas + "<br>" + " El número a adivinar (se agrega solo con el fin de comprobar el ejercicio) es el siguiente: " +  rand);
    }
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function obtenerRand(){
    var digito = "123456789".split(''),
        prim = baraj(digito).pop();
    digito.push('0');
    return parseInt( prim + baraj(digito).join('').substring(0,3), 10);
}

function baraj(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}



