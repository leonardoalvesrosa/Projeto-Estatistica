
const nomevar = document.getElementById('nomevar')
const dadosvar = document.getElementById('dados')
const salve = document.getElementById('calc')





    /*
const array = [1, 5, 3, 3, 1, 6, 7, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const novoArray = [ ...new Set( array ) ];
console.log(novoArray);
// Esperado: [1, 5, 3, 6, 7, 2, 4]
*/


function criaTag(elemento){
    return document.createElement(elemento)
}

function visuTabela(){


    let dados = []
    let dadosSep = []
    let nome = nomevar.value 
    let conteudo = dadosvar.value

    if (nome == "" || conteudo == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        nomevar.focus()
        return
    }

    dados.push(conteudo)
    dadosSep = dados.toString().split(';')

   
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
    
    

     dadosSep.sort()

    console.log(dadosSep)
    

    let x, fac = 0
    let freqArray = []
    let facArray = []
    let perArray = []
    let perFac = []
    for (let i = 0; i < dadosSep.length; i = x) {  
        let freqCont = 1
        let freqPer = 0
        for (x = i + 1; x < dadosSep.length; x++) {
            if (dadosSep[i] == dadosSep[x]) {
                freqCont++;
                //freqPer = (freqCont / (dadosSep.length)) * 100
            } else {
            break;
            }
        }
        fac += freqCont
        facArray.push(fac)
        freqArray.push(freqCont)
        //perArray.push(freqPer)
    }

    for(let i = 0; i < freqArray.length; i++){
        per = Math.round((freqArray[i] / dadosSep.length) * 100)
        perArray.push(per)
    }

    
    for(let i = 0; i < facArray.length; i++){
        per = Math.round((facArray[i] / dadosSep.length) * 100)
        perFac.push(per)
    }


    console.log(freqArray)
    console.log(perArray)
    console.log(facArray)
    console.log(perFac)
        




    const novoDados = [ ...new Set( dadosSep ) ];
    console.log(novoDados);



        
    console.log(novoDados)
    console.log(freqArray)

    let chart = new Chart(document.getElementById("myChart"), {
        type: 'pie',
        data:{
            labels: novoDados,
            datasets: [
            {
                label: "Porcentagem",
                data: freqArray,
            
                backgroundColor:[
                    
                ],
                

                borderWidth: 2
                
            
                }
            ]
            
        },

        options:{  

            title:{
                display: true,
                fontSize: 20,
                text: "GRÁFICO DESCRITIVO"
            },

            scales:{
                yAxes: [
                    {
                        ticks:{
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    })



    for(let j = 0; j < novoDados.length; j++){
        let linhaBody = criaTag("tr")
        //linhaBody.appendChild(criaCelula("td" ))
        let cell = criaCelula("td", novoDados[j])
        let cell2 = criaCelula("td", freqArray[j])
        let cell3 = criaCelula("td", perArray[j])
        let cell4 = criaCelula("td", facArray[j])
        let cell5 = criaCelula("td", perFac[j])
        linhaBody.appendChild(cell)
        linhaBody.appendChild(cell2)
        linhaBody.appendChild(cell3)
        linhaBody.appendChild(cell4)
        linhaBody.appendChild(cell5)
        tbody.appendChild(linhaBody)

    }

    


    let linhaFoot = criaTag("tr")
    let celulaFoot = criaCelula("td", "Rodape")
    celulaFoot.setAttribute("colspan",3)
    
    linhaFoot.appendChild(celulaFoot)
    tbody.tfoot.appendChild(linhaFoot)
    


}


//-----------------------------------------------------------------------------------------------------------------------------------------





