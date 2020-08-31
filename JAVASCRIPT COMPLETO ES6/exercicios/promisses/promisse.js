//promessa= pode ser resolvida ou rejeitada

//new Promissa

const promessa = new Promise((resolve, reject) => {
  let condicao = false
  if (condicao) {
    resolve()
  } else {
    reject(Error('um erro ocorreu na promise'))
  }
});

console.log(promessa)

//o then só vai ser ativado quando a promse acima for resolvida
//o then retorna outra promisse, por isso pode haver um encadeamento de thens 
//o valor do proximo then será sempre o valor que foi retornado no then anterior

promessa.then((resolve) => {
  console.log(resolve)
  return resolve
}).then((resolve) => {
  console.log(resolve)
}).catch((reject) => {
  console.log(reject)
})

//pode passar o erro direto no then

// .then((resolve) => {
//   console.log(resolve)
// }, reject => {
//   console.log(reject)
// }).finally((teste) => {
//console.log(teste) - undefined
// })

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("usuário logado")
  }, 1000)
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("dados carregados")
  }, 1500)
});

// Promise.all() - resolve várias promisses juntas
// dentro passa um array com o nome das suas promessas
const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolve) => {
  console.log(resolve)
})


//.race()  - retorna a primeira promisse que for resolvida 