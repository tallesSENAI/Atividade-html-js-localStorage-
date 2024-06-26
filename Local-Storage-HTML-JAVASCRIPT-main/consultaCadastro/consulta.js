/*o JavaScript vai percorrer o HTML e vai pegar esses elementos automaticamente por conta do 'getElementById' */
const nomeCompletoInput = document.getElementById('nomeCompletoCadastro');
const dataNascimentoInput = document.getElementById('dataNascimentoCadastro');
const cpfCadastro = document.getElementById('cpfCadastro');
const emailInput = document.getElementById('emailCadastro');
const senhaInput = document.getElementById('senhaCadastro');
const generoCadastro = document.getElementById('generoCadastro');
const fotoCadastro = document.getElementById('fotoCadastro');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

function deletarUsuario(email) {
    let pessoasCadastradas = pegaPessoasCadastradas();
    pessoasCadastradas = pessoasCadastradas.filter(pessoa => pessoa.email !== email);
    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoasCadastradas));
    location.reload(); // Recarrega a página para atualizar a tabela
}

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

    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: White; border: 1px black solid;"> Nome: ${batata.nome}</span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: Grey; border: 1px black solid;"> Data de Nascimento: ${batata.data} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: White; border: 1px black solid;"> CPF: ${batata.cpf} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: Grey; border: 1px black solid;"> Genero: ${batata.genero} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: White; border: 1px black solid;"> Email: ${batata.email} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-Color: Grey; border: 1px black solid;"> Senha: ${batata.senha} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Black; background-color: White;">Foto de perfil:</span>
    <img src="${batata.foto}" width="100" height="80" style="border-radius: 50%; border: 3px solid white; margin-right: 7%" /><br>`;

    tabelaCadastroDiv.innerHTML += `
        <button onclick="deletarUsuario('${batata.email}')">Deletar</button>
        <button onclick="alterarUsuario('${batata.email}')">Alterar</button>`;
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