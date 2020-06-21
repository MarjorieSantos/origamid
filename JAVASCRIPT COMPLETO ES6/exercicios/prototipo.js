//prototype é um objeto adicionado a uma função quando ela mesma é criada

function pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const andre = new pessoa('andre', 27)



pessoa.prototype.andar = function() {
    return 'pessoa andou'
}