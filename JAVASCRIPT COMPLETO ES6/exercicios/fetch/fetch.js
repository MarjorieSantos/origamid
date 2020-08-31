//esta localizada detnro do browser
//faz requisições http
//sempre va retornar um objeto response

const doc = fetch('./doc.txt')
console.log(doc)

doc.then(res => res.text()).then((body) => console.log(body)) //vai retornar o texto que tem dentro do arquivo
