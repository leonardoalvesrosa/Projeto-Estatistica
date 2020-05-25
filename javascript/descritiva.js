
const nomevar = document.getElementById('nomevar')
var dadosvar = document.getElementById('dados')
const salve = document.getElementById('calc')
var variavel = document.getElementById('variavel')





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

    //console.log(conteudo)

    if (nome == "" || conteudo == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        nomevar.focus()
        return
    }

        
    
/*

    if(variavel.value === 'nominal' && isNaN(conteudo)){
        alert('Digite somente palavras!')
        dadosvar.innerHTML = ' '
        dadosvar.focus()
        return
    }
    
     */

    dados.push(conteudo)
    dadosSep = dados.toString().split(';')


    if(variavel.value === 'discreta' || variavel.value === 'continua'){
       // console.log(variavel.value)
        var dadosNum = []

        for(let i = 0; i < dadosSep.length; i++){
            dadosNum.push(Number(dadosSep[i]))
        }

        function troca(vet, i, j) {
            let aux = vet[i]
            vet[i] = vet[j]
            vet[j] = aux
         }
         
         function quickSort(vet, posIni = 0, posFim = vet.length - 1) {
            
            if(posFim > posIni) { 
               const posPivot = posFim  
               let posDiv = posIni - 1    
               for(let i = posIni; i < posFim; i++) { 
                  if(vet[i] < vet[posPivot]) {
                     posDiv++
                     troca(vet, i, posDiv)  
                  }
               }
               posDiv++
               troca(vet, posDiv, posPivot)
               quickSort(vet, posIni, posDiv - 1)
               quickSort(vet, posDiv + 1, posFim)
            }
         }

         quickSort(dadosNum)
        
        //console.log(dadosSep)
        //console.log(dadosNum)


    } 




   
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
    
     

   //console.log(dadosSep)
    
   dadosSep.sort()

    let x, fac = 0
    let freqArray = []
    let facArray = []
    let perArray = []
    let perFac = []
    let maior = 0
    let moda = 0

//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // Casos seja Nominal ou Ordinal
    if(variavel.value === 'nominal' || variavel.value === 'ordinal'){

        for (let i = 0; i < dadosSep.length; i = x) {  
            let freqCont = 1
            let freqPer = 0
            for (x = i + 1; x < dadosSep.length; x++) { 
                if (dadosSep[i] == dadosSep[x]) {
                    if(freqCont > moda){
                        moda =  dadosSep[x]
                    }
                    freqCont++;
                    freqPer = (freqCont / (dadosSep.length)) * 100
                } else {
                break;
                }

            }
            fac += freqCont
            facArray.push(fac)
            freqArray.push(freqCont)
            //perArray.push(freqPer)

                
        }

        console.log(moda)

        for(let i = 0; i < freqArray.length; i++){
            per = Math.round((freqArray[i] / dadosSep.length) * 100)
            perArray.push(per)
        }
    
        
        for(let i = 0; i < facArray.length; i++){
            per = Math.round((facArray[i] / dadosSep.length) * 100)
            perFac.push(per)
        }

        /*
        for(let x = 0; x < dadosSep.length; x++){
            for(let i = 0; i < freqArray.length; i++){
                if(freqArray[i] > moda){
                    moda = freqArray[i]
                }
            }
        }
        
        console.log(moda)
        */
        
        
    
    }
    

    //console.log(freqArray)
    //console.log(perArray)
    //console.log(facArray)
    //console.log(perFac)
        


//-------------------------------------------------------------------------------------------------------------------------------------------------------







//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // Casos seja Discreta
    if(variavel.value === 'discreta'){
        for (let i = 0; i < dadosNum.length; i = x) {  
            let freqCont = 1
            let freqPer = 0
            for (x = i + 1; x < dadosNum.length; x++) { 
                if (dadosNum[i] == dadosNum[x]) {
                    freqCont++;
                    freqPer = (freqCont / (dadosNum.length)) * 100
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
            per = Math.round((freqArray[i] / dadosNum.length) * 100)
            perArray.push(per)
        }
    
        
        for(let i = 0; i < facArray.length; i++){
            per = Math.round((facArray[i] / dadosNum.length) * 100)
            perFac.push(per)
        }
    


    }
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // Casos seja Continua
    
    if(variavel.value === 'continua'){
        let menor = 0
        let maior = 0
        let at = 0 // amplitude total (intervalo)
        let freqTot = 0
        let intervalo = 0
        var linha = 0
        let k1 = 0
        let k2 = 0
        let k3 = 0
        let verif = Boolean

        for(let i = 0; i < dadosNum.length; i++){
            if(i === 0){
                menor = dadosNum[i]
            } else {
                if(dadosNum[i] < menor){
                    menor = dadosNum[i]
                }
            }
            if(dadosNum[i] > maior){
                maior = dadosNum[i]
            }
        }

        at = maior - menor
        at = at + 1  // precisa ser pelo menos +1


        for (let i = 0; i < dadosNum.length; i = x) {  
            let freqCont = 1
            for (x = i + 1; x < dadosNum.length; x++) { 
                if (dadosNum[i] == dadosNum[x]) {
                    freqCont++;
                    //freqPer = (freqCont / (dadosNum.length)) * 100
                } else {
                break;
                }
            }
            freqTot += freqCont
                
            }
        
            
   

        k2 = Math.floor(Math.sqrt(freqTot)) // k
        k1 = k2 - 1
        k3 = k2 + 1
        // console.log(k1)
        // console.log(k2)
        // console.log(k3)

        verif = false
        //console.log(verif)
        do{
            if(at % k1 === 0){
                intervalo = at / k1
                linha = k1
                verif = true

            } else if (at % k2 === 0){
                intervalo = at / k2
                linha = k2
                verif = true

            } else if(at % k3 === 0){
                intervalo = at / k3
                linha = k3
                verif = true

            } else {
                at = at + 1
            }

        } while(verif === false)

        //console.log(verif)
        console.log(intervalo)
        console.log(linha)
        console.log(at)







        // // TESTE FUNCIONALIDADE
        // // ---------------------------------------------------------------------------

         // cria quantidade de posições iguais a de linhas + 1
         var p = []
         for(i = 0; i <= linha - 1; i++){
            p[i] = 1
        }

        p[0] = menor  // menor numero

         // atribui os valores a cada posição do vetor incrementando o intervalo de classe
         for(i = 1; i <= linha ; i++){
            p[i] = p[i - 1] + intervalo
        }
        console.log(p)



         // FREQUENCIA ACUMULADA
         var facCont = []
         for(i = 1; i < p.length; i++){
             max = p[i]
             cont = 0
             for(x = 0; x < dadosNum.length; x++){
                 if(dadosNum[x] < max){
                     cont = cont + 1  
                 }
             }
             facCont.push(cont)
             
             
         }
 
         console.log(freqTot)
         console.log(facCont)
 
         // FREQUENCIA SIMPLES
         var freq = []
         let pos = facCont.length
         for(let i = 0; i < facCont.length - 1; i++){
             if(i === 0){
                 freq.push(facCont[0])
             } 
             freq.push(facCont[i + 1] - facCont[i])
         }
         console.log(freq)


              
        for(let i = 0; i < freq.length; i++){
            per = Math.round((freq[i] / dadosNum.length) * 100)
            perArray.push(per)
        }

        console.log(perArray)
    
        
        for(let i = 0; i < facCont.length; i++){
            per = Math.round((facCont[i] / dadosNum.length) * 100)
            perFac.push(per)
        }

        console.log(perFac)
        
 
 



    }
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------------------




    var novoDados = [] 
    if(variavel.value === 'discreta' || variavel.value === 'continua'){
        novoDados = [ ...new Set( dadosNum ) ];
    } else{
        novoDados = [ ...new Set( dadosSep ) ];
        
    }
   
   

    // GRAFICO
    if(variavel.value === 'nominal' || variavel.value === 'ordinal'){
        let chart = new Chart(document.getElementById("myChart"), {
            type: 'pie',
            data:{
                labels: novoDados,
                datasets: [
                {
                    label: "Porcentagem",
                    data: freqArray,
                
                    backgroundColor:[
                        '#00d2a6',
                        '#00fb71',
                        '#feff67',
                        '#fe6067',
                        '#516067',
                        '#5160ff',
                        '#f98140',
                        '#a96fbd',
                        '#021802',
                        '#8102f7'
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
    }


    // GRAFICO
    if(variavel.value === 'discreta'){
        let chart = new Chart(document.getElementById("myChart"), {
            type: 'bar',
            data:{
                labels: novoDados,
                datasets: [
                {
                    label: "Porcentagem",
                    data: freqArray,
                
                    backgroundColor:[
                        '#00d2a6',
                        '#00fb71',
                        '#feff67',
                        '#fe6067',
                        '#516067',
                        '#5160ff',
                        '#f98140',
                        '#a96fbd',
                        '#021802',
                        '#8102f7'
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
    }

    var z = []
    for(let i = 0; i < p.length - 1; i++){
        z.push(`${p[i]} |--- ${p[i+1]}`)
    }
        
    // GRAFICO
    if(variavel.value === 'continua'){
        let chart = new Chart(document.getElementById("myChart"), {
            type: 'bar',
            data:{
                labels: z,
                datasets: [
                {
                    label: "Análise",
                    data: freq,
                
                    backgroundColor:[
                        '#00d2a6',
                        '#00fb71',
                        '#feff67',
                        '#fe6067',
                        '#516067',
                        '#5160ff',
                        '#f98140',
                        '#a96fbd',
                        '#021802',
                        '#8102f7'
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
    }
    


    // TABELA
    if(variavel.value === 'nominal' || variavel.value === 'ordinal' || variavel.value === 'discreta'){
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
    }


    // TABELA
    if(variavel.value === 'continua'){
        for(let j = 0; j < linha; j++){
            let linhaBody = criaTag("tr")
            //linhaBody.appendChild(criaCelula("td" ))
            let cell = criaCelula("td", `${p[j]} |--- ${p[j+1]}`)
            let cell2 = criaCelula("td", freq[j])
            let cell3 = criaCelula("td", perArray[j])
            let cell4 = criaCelula("td", facCont[j])
            let cell5 = criaCelula("td", perFac[j])
            linhaBody.appendChild(cell)
            linhaBody.appendChild(cell2)
            linhaBody.appendChild(cell3)
            linhaBody.appendChild(cell4)
            linhaBody.appendChild(cell5)
            tbody.appendChild(linhaBody)
        }


    }
    


    let linhaFoot = criaTag("tr")
    let celulaFoot = criaCelula("td", "Rodape")
    celulaFoot.setAttribute("colspan",3)
    
    linhaFoot.appendChild(celulaFoot)
    //tbody.tfoot.appendChild(linhaFoot)
}
