

function criaDiv(){
    if(intervalo.value === 'entre'){
        let div_inicio = document.getElementById('div_inicio')
        let inicio = document.createElement('input')
        inicio.className = 'form-control'
        inicio.placeholder = 'Início'
        inicio.id = 'inicio'

        let div_fim = document.getElementById('div_fim')
        let fim = document.createElement('input')
        fim.className = 'form-control'
        fim.placeholder = 'Fim'
        fim.id = 'fim'


        div_inicio.appendChild(inicio)
        div_fim.appendChild(fim)

    }else{
        let div_inicio = document.getElementById('div_inicio').innerHTML = ''
        let div_fim = document.getElementById('div_fim').innerHTML = ''
        
    }

    if(intervalo.value === 'maior' || intervalo.value === 'menor'){
        let div_qtde = document.getElementById('div_qtde')
        let qtde = document.createElement('input')
        qtde.className = 'form-control'
        qtde.placeholder = 'Quantidade'
        qtde.id = 'qtde'

        document.getElementById('div_qtde').innerHTML = ''
        div_qtde.appendChild(qtde)

    }else{
        let div_qtde = document.getElementById('div_qtde').innerHTML = ''
    }

}


// Funçaõ que retorna a criação de um elemento
function criaTag(elemento){
    return document.createElement(elemento)
}

function calcular(){

    let intervalo = document.getElementById('intervalo')
    let pmin = Number(document.getElementById('pmin').value)
    let pmax = Number(document.getElementById('pmax').value)
    let media = (pmax + pmin) / 2


    if (pmin == "" || pmax == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('pmin').focus()
        return
    }

    if (pmin === pmax){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('pmin').focus()
        return
    }

    if (intervalo.value == ""){
        swal("Ops!", "Selecione um intervalo!", "error");
        intervalo.focus()
        return
    }

    if (intervalo.value == "entre" && document.getElementById('inicio').value == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('inicio').focus()
        return
    }

    if (intervalo.value == "entre" && document.getElementById('fim').value == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('fim').focus()
        return
    }
    
    if (intervalo.value == "maior" || intervalo.value == "menor" && document.getElementById('qtde').value == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('qtde').focus()
        return
    }
  
    console.log('media '+ media)

    let variancia = ((pmax - pmin) ** 2) / 12
    let dp = Math.sqrt(variancia)
    let cv = (dp / media) * 100
    var prob = 0

    //Maior que
    if(intervalo.value === 'maior') {
        let qtde = document.getElementById('qtde').value
        var int = pmax - qtde
        prob = (1 / (pmax - pmin)) * int * 100
    }
    else if(intervalo.value === 'menor') {
        let qtde = document.getElementById('qtde').value
        var int = qtde - pmin
        prob = (1 / (pmax - pmin)) * int * 100
    }
    else if(intervalo.value === 'entre') {
        let inicio = document.getElementById('inicio').value
        let fim = document.getElementById('fim').value
        var int = fim - inicio
        prob = (1 / (pmax - pmin)) * int * 100
    }
    

    let Prob = prob.toFixed(2)
    let Dp = dp.toFixed(2)
    let Cv = cv.toFixed(2)
   

    console.log('variancia '+ variancia)
    console.log('dp '+ dp)
    console.log('cv '+ cv)





    // Criação da Tabela
    let tabela = document.getElementById('tabela').innerHTML = ""
    tabela = document.getElementById('tabela')

    let thead = criaTag("thead")
    let tbody = criaTag("tbody")
    let tfoot = criaTag("tfoot")

    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)

    let indiceTabela = ["Probabilidade", "Média", "Desvio Padrão", "Coeficiente de Variação"]


    let linhaHead = criaTag("tr")

    function criaCelula(tag, text) {
        tag = criaTag(tag)
        tag.textContent = text
        return tag
    }
    

    for(let i = 0; i <= indiceTabela.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela[i])
        linhaHead.appendChild(th)
    }
   
    thead.appendChild(linhaHead)


    let linhaBody = criaTag("tr")
    let probCell = criaCelula("td", `${Prob} %`)
    let mediaCell = criaCelula("td", media)
    let dpCell = criaCelula("td", `${Dp} %`)
    let cvCell = criaCelula("td", `${Cv} %`)
    linhaBody.appendChild(probCell)
    linhaBody.appendChild(mediaCell)
    linhaBody.appendChild(dpCell)
    linhaBody.appendChild(cvCell)
    tbody.appendChild(linhaBody)

}