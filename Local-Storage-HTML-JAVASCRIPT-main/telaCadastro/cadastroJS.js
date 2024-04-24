/*o JavaScript vai percorrer o HTML e vai pegar esses elementos automaticamente por conta do 'getElementById' */
const nomeCompletoInput = document.getElementById('nomeCompletoCadastro');
const dataNascimentoInput = document.getElementById('dataNascimentoCadastro');
const emailInput = document.getElementById('emailCadastro');
const senhaInput = document.getElementById('senhaCadastro');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');
const generoCadastro = document.getElementById('generoCadastro');


function cadastrarUsuario(){
    const pessoa = {};
                            //JSON.parse = transforma dados de STRING em um OBJETO

    const pessoasCadastradas = pegaPessoasCadastradas();

    pessoasCadastradas.push(pessoa);
    
    pessoa.nome = nomeCompletoInput.value;
    pessoa.data = dataNascimentoInput.value;
    pessoa.email = emailInput.value;
    pessoa.senha = senhaInput.value;
    pessoa.genero = generoCadastro.value;

    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoasCadastradas)); //JSON.stringfy pega o objeto e transforma em texto

    mostraPessoa(pessoa);

    console.log("Usuário cadastrado");
    return false;
}

function pegaPessoasCadastradas(){

    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));//coloca entre "" o nome da chave que você quer pegar
    
        if(pessoasCadastradas === null){
            pessoasCadastradas = [];
        }
    
        return pessoasCadastradas;
    }
