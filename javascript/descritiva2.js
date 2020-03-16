
const nomevar = document.getElementById('nomevar')
const dadosvar = document.getElementById('dados')
const calcu = document.getElementById('calc')


let dados = []
let dadosSep = []

function calcular(nome){ 
    let nomeV = nomevar.value 
    let conteudo = dadosvar.value

    if (nomeV == "" || conteudo == ""){
    alert('Digite dados válidos!')
    nomevar.focus()
    return
    }

    dados.push(conteudo)
    dadosSep = dados.toString().split(';')
    console.log(dadosSep)

    
/*
    var tb = document.getElementById('tabela')
    var qtdlinha = tb.rows.length
    var linha = tb.insertRow(qtdlinha)

    var cellnome = linha.insertCell(0)
    var celldados = linha.insertCell(1)

    cellnome.innerHTML = nome

   for(i = 0; i < dados.length ;i++){
        celldados.innerHTML = dados[i] + '<br>'
    }
    */
}
calcu.addEventListener('click', calcular) 










