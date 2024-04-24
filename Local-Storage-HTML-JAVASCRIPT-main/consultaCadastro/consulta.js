const nomeCompletoInput = document.getElementById('nomeCompletoCadastro');
const dataNascimentoInput = document.getElementById('dataNascimentoCadastro');
const emailInput = document.getElementById('emailCadastro');
const senhaInput = document.getElementById('senhaCadastro');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

//este bloco de codigo vai mostrando na tela cada vez que um novo usuário é cadastrado
const pessoas = pegaPessoasCadastradas();
for(const pessoa of pessoas) {
    mostraPessoa(pessoa);
}
//este bloco de codigo vai mostrando na tela cada vez que um novo usuário é cadastrado

function mostraPessoa(batata){

    // console.log(nomeCompletoInput.value); /* "value" funciona em tags de INPUT, TEXTEAREA e SELECT */
    // console.log(dataNascimentoInput.value);
    // console.log(emailInput.value);
    // console.log(senhaInput.value); 
    // console.log(tabelaCadastroDiv); /* "value" não é usado quando se há uma classe DIV, ele é usado apenas para INPUT, TEXTAREA e SELECT */

    tabelaCadastroDiv.innerHTML += `<span style="color: Red; background-Color: Blue;">Nome: ${batata.nome}</span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: White; background-Color: Black;">Data de Nascimento: ${batata.data} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Yellow; background-Color: Purple;">Email: ${batata.email}        </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Grey; background-Color: Blue;">Senha: ${batata.senha}            </span><br>`;
    tabelaCadastroDiv.innerHTML += `<p></p>`

}

//esta função NECESSITA estar nesta classe e na classe "cadastroJS"
function pegaPessoasCadastradas(){

    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));//coloca entre "" o nome da chave que você quer pegar
    
        if(pessoasCadastradas === null){
            pessoasCadastradas = [];
        }
    
        return pessoasCadastradas;
    }