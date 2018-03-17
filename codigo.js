class Pessoa{
    constructor(_Nome,_Sobrenome,_Telefone){
        this.Nome = _Nome;
        this.Sobrenome = _Sobrenome;
        this.Telefone = _Telefone
    }

    mostraObjeto() {
        alert(this.Nome+"-"+this.Sobrenome+"-"+this.Telefone);
    }


}
function cadastrarPessoa(){
    p = new Pessoa(
        document.getElementById("nome").value,
        document.getElementById("sobrenome").value,
        document.getElementById("telefone").value
    );

    p.mostraObjeto();
}
