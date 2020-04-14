//operador ternário 

// some 500 ao valor  de scroll abaixo, atribuindo o novo valor a scroll
  var scroll = 1000
  scroll += 500
  console.log(scroll)

 //atribua o true para a variavel darCredIto caso o cliente possua carro e casa. e false se for ao contrário

 var possuiCarro = false
 var possuiCasa = true
 var darCredIto = (possuiCarro && possuiCasa) ? "dar credito ao cliente" : "não tem como dar o crédito"
 console.log(darCredIto)