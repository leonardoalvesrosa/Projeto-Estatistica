
const nomevar = document.getElementById('nomevar')
const dadosvar = document.getElementById('dados')
const salve = document.getElementById('salv')

function salvar (){ 
    let dados = []
    let dadosSep = []
    let nome = nomevar.value 
    let conteudo = dadosvar.value

    if (nome == "" || conteudo == ""){
    alert('Digite dados válidos!')
    nomevar.focus()
    return
    }

    dados.push(conteudo)
    dadosSep = dados.toString().split(';')
    console.log(dadosSep)

}

salve.addEventListener('click', salvar) 

function visuTabela(nome, dados){

    var tb = document.getElementById('tabela')
    var nometitulo = document.getElementById('nomecol')

    var qtdlinha = tb.rows.length
    var linha = tb.insertRow(qtdlinha)

    
    var celldados = linha.insertCell(0)
 
    nometitulo.innerHTML = nome
  

    dadosSep = dados.toString().split(';')
    console.log(dadosSep)
    for(let item in dadosSep){
        celldados.innerHTML += dadosSep[item] + '<br>'
    }
    
    
    
}

console.log(dadosSep.length)









