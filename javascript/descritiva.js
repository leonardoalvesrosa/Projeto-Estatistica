
const nomevar = document.getElementById('nomevar')
const dadosvar = document.getElementById('dados')
const salve = document.getElementById('calc')










function criaTag(elemento){
    return document.createElement(elemento)
}

function visuTabela(){


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
   
    let tabela = document.getElementById('tabela')
    //let nometitulo = document.getElementById('nomecol')


    let thead = criaTag("thead")
    let tbody = criaTag("tbody")
    let tfoot = criaTag("tfoot")

    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)

    let indiceTabela = [nome, "Frequência", "Frequência (%)", "Frequência Acumulada", "FAC (%)"]


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

    //dadosSep = dados.toString().split(';')


    for(let j = 0; j < dadosSep.length; j++){
        
        let linhaBody = criaTag("tr")
        //linhaBody.appendChild(criaCelula("td" ))
        let cell = criaCelula("td", dadosSep[j])
        linhaBody.appendChild(cell)
        
        tbody.appendChild(linhaBody)
    }

    





    /*
    for(let j = 0; j < dadosSep.length; j++){
        //console.log(dadosSep[j])
        
        let linhaBody = criaTag("tr")
        linhaBody.appendChild(criaCelula("td", (j+1)))
        for(let i = 0; i < dadosSep[j].length; i++){
            //console.log(dadosSep[j][i])
            let cell = criaCelula("td", dadosSep[j][i])
            linhaBody.appendChild(cell)
        }
        tbody.appendChild(linhaBody)
    }
    
*/


    let linhaFoot = criaTag("tr")
    let celulaFoot = criaCelula("td", "Rodape")
    celulaFoot.setAttribute("colspan",3)
    
    linhaFoot.appendChild(celulaFoot)
    tbody.tfoot.appendChild(linhaFoot)
    
    
    
}











