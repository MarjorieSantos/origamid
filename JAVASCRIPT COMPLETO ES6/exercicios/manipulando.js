const aniais = document.querySelector(".animais")
const contato = document.querySelector(".contato")
const titulo = contato.querySelector(".titulo") //então ele vai pegar o primeiro titulo de contato

animais.oppendChild(titulo) //colocar esse elemento como ultimo filho de animais

animais.insertBefore(animais, titulo) //o primeiro "paramentro" indica o que vcê quer mover para o local do segundo

//o "parametro" tem que ser filho do elemento que está sendo passado antes do insertBefore 

//para criar novos elementos através do javascript
//após o primeiro filho de mapa, adicioa o titulo
const novoH1 = document.createElement("h1")
novoH1.innerText = "novo título"
novoH1.classList.add("titulo")

mapa.appendChild(novoH1)

//clonar elemento
 