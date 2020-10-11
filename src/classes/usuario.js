var usuario = class Usuario {
    constructor(nome, email, senha, Cpf, nick) {
        this.Cpf = Cpf
        this.nome = nome
        this.email = email
        this.senha = senha
        this.nick = nick
    }

}
module.exports = usuario