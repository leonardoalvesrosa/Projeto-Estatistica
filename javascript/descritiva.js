
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




var valores = medidasValores

function verifica(){
    if(medidas.value === 'quartil'){
        for(let i = 1; i <= 4; i++){
            let opcao = document.createElement('option')
            opcao.innerHTML = i
            opcao.value = i
            valores.appendChild(opcao)
        }
    }

    if(medidas.value === 'quintil'){
        for(let i = 1; i <= 5; i++){
            let opcao = document.createElement('option')
            opcao.innerHTML = i
            opcao.value = i
            valores.appendChild(opcao)
        }
    }

    if(medidas.value === 'decil'){
        valores.value = 0
        for(let i = 1; i <= 10; i++){
            let opcao = document.createElement('option')
            opcao.innerHTML = i
            opcao.value = i
            valores.appendChild(opcao)
        }
    }

    if(medidas.value === 'porcentil'){
        valores.value = 0
        for(let i = 1; i <= 100; i++){
            let opcao = document.createElement('option')
            opcao.innerHTML = i
            opcao.value = i
            valores.appendChild(opcao)
        }
    }
}








function visuTabela(){


    let dados = []
    let dadosSep = []
    let nome = nomevar.value 
    var conteudo = dadosvar.value

    //console.log(conteudo)

    if (nome == "" || conteudo == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        nomevar.focus()
        return
    }


    if(variavel.value === ''){
        swal("Ops!", "Selecione uma variável", "error");
        variavel.focus()
        return
    }

   

    // if(variavel.value === 'nominal' && medidas.value !== 'Selecione'){
    //     swal("Ops!", "Medidas separatrizes operam somente em variáveis quantitativas!", "error");
    //     medidas.disabled
    //     variavel.focus()
    //     return
    // }

    // if(variavel.value === 'ordinal' && medidas.value !== 'Selecione'){
    //     swal("Ops!", "Medidas separatrizes operam somente em variáveis quantitativas!", "error");
    //     medidas.disabled
    //     variavel.focus()
    //     return
    // }



    console.log(medidas.value)
    dados.push(conteudo)
    dadosSep = dados.toString().split(';')


    if((variavel.value === 'nominal' || variavel.value === 'ordinal')  && !isNaN(dadosSep[0])){
        swal("Ops!", "Esta variável só aceita palavras", "error");
        nomevar.focus()
        return
    }


    if((variavel.value === 'discreta' || variavel.value === 'continua')  && isNaN(dadosSep[0])){
        swal("Ops!", "Esta variável só aceita números", "error");
        nomevar.focus()
        return
    }


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
    let tabela2 = document.getElementById('tabela2')
    let tabela3 = document.getElementById('tabela3')
    let tabela4 = document.getElementById('tabela4')
    //let nometitulo = document.getElementById('nomecol')


    let thead = criaTag("thead")
    let tbody = criaTag("tbody")

    let thead2 = criaTag("thead")
    let tbody2 = criaTag("tbody")

    let thead3 = criaTag("thead")
    let tbody3 = criaTag("tbody")

    let thead4 = criaTag("thead")
    let tbody4 = criaTag("tbody")

    let tfoot = criaTag("tfoot")

    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)

    
    tabela2.appendChild(thead2)
    tabela2.appendChild(tbody2)

    
    tabela3.appendChild(thead3)
    tabela3.appendChild(tbody3)


    
    tabela4.appendChild(thead4)
    tabela4.appendChild(tbody4)
   

    let indiceTabela = [nome, "Frequência", "Frequência (%)", "Frequência Acumulada", "FAC (%)"]
    let indiceTabela2 = ["Média", "Moda", "Mediana"]
    let indiceTabela3 = ["Medida Separatriz"]
    let indiceTabela4 = ["Desvio Padrão", "Coeficiente de Variação (%)"]

    let linhaHead = criaTag("tr")
    let linhaHead2 = criaTag("tr")
    let linhaHead3 = criaTag("tr")
    let linhaHead4 = criaTag("tr")

    function criaCelula(tag, text) {
        tag = criaTag(tag)
        tag.textContent = text
        return tag
    }
    

    for(let i = 0; i <= indiceTabela.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela[i])
        linhaHead.appendChild(th)
    }


    for(let i = 0; i <= indiceTabela2.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela2[i])
        linhaHead2.appendChild(th)
    }

    
    for(let i = 0; i <= indiceTabela3.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela3[i])
        linhaHead3.appendChild(th)
    }

    for(let i = 0; i <= indiceTabela4.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela4[i])
        linhaHead4.appendChild(th)
    }
    
    thead.appendChild(linhaHead)
    thead2.appendChild(linhaHead2)
    thead3.appendChild(linhaHead3)
  
    
     

   //console.log(dadosSep)
    
    dadosSep.sort()
    
   

    let x, fac = 0
    let freqArray = []
    let facArray = []
    let perArray = []
    let perFac = []
  

//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // Casos seja Nominal ou Ordinal
    if(variavel.value === 'nominal' || variavel.value === 'ordinal'){

        var freqTot = 0

        for (let i = 0; i < dadosSep.length; i = x) {  
            let freqCont = 1
            let freqPer = 0
            for (x = i + 1; x < dadosSep.length; x++) { 
                if (dadosSep[i] == dadosSep[x]) {
                    freqCont++;
                    freqPer = (freqCont / (dadosSep.length)) * 100
                } else {
                break;
                }

            }
            freqTot += freqCont
            fac += freqCont
            facArray.push(fac)
            freqArray.push(freqCont)
            //perArray.push(freqPer)

                
        }

        //console.log(moda)

        for(let i = 0; i < freqArray.length; i++){
            per = Math.round((freqArray[i] / dadosSep.length) * 100)
            perArray.push(per)
        }
    
        
        for(let i = 0; i < facArray.length; i++){
            per = Math.round((facArray[i] / dadosSep.length) * 100)
            perFac.push(per)
        }
        
        
    }
    

    //console.log(freqArray)
    //console.log(perArray)
    //console.log(facArray)
    //console.log(perFac)
        


//-------------------------------------------------------------------------------------------------------------------------------------------------------







//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // Casos seja Discreta
    if(variavel.value === 'discreta'){

        var freqTot = 0


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
            freqTot += freqCont
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
        var freqTot = 0
        var intervalo = 0
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
        // console.log(intervalo)
        // console.log(linha)
        // console.log(at)







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
        //console.log(p)



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
 
         //console.log(freqTot)
         //console.log(facCont)
 
         // FREQUENCIA SIMPLES
         var freq = []
         let pos = facCont.length
         for(let i = 0; i < facCont.length - 1; i++){
             if(i === 0){
                 freq.push(facCont[0])
             } 
             freq.push(facCont[i + 1] - facCont[i])
         }
         //console.log(freq)


              
        for(let i = 0; i < freq.length; i++){
            per = Math.round((freq[i] / dadosNum.length) * 100)
            perArray.push(per)
        }

        //console.log(perArray)
    
        
        for(let i = 0; i < facCont.length; i++){
            per = Math.round((facCont[i] / dadosNum.length) * 100)
            perFac.push(per)
        }

        //console.log(perFac)
        
 
 



    }
    
    
//-------------------------------------------------------------------------------------------------------------------------------------------------------




    var novoDados = [] 
    if(variavel.value === 'discreta' || variavel.value === 'continua'){
        novoDados = [ ...new Set( dadosNum ) ];
    } else{
        novoDados = [ ...new Set( dadosSep ) ];
        
    }

       
//-------------------------------------------------------------------------------------------------------------------------------------------------------

    // FREQUENCIA DISCRETA
    
    if(variavel.value === 'discreta'){
        let soma = 0
        var media = 0
        var m = 0 // media com 2 casas
        let maior = 0
        let moda = 0
        var modaArray = []
        let meio = 0
        var mediana = 0
        var arrayModa = []


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





        for(let i = 0; i < freqArray.length; i++){
            arrayModa.push(freqArray[i])
        }


        quickSort(arrayModa)


       
        // MODA
        let posIni = freqArray[0]

        for(let i = 1; i < freqArray.length - 1; i++){


            // var valor = modaArray.length
            // for(let i = 0; i < valor;i++){
            //     if(modaArray[i] === 'Amodal'){
            //         modaArray.splice(0,valor)
            //     }
            // }



            if(posIni !== freqArray[i]){
                moda = 'moda'
                i = (freqArray.length - 1)

            } else {
                moda = 'Amodal'
                modaArray.push(moda)
            }
        }

        if(moda === 'moda'){
            let posFim = (freqArray.length - 1)
            


            maior = arrayModa[posFim]
            
            for(let i = 0; i < freqArray.length; i++){
                if(freqArray[i] === maior){
                    modaArray.push(novoDados[i])
                }
            }
        }

        // MEDIA
        for(let i = 0; i < freqArray.length; i++){
            soma += freqArray[i] * novoDados[i]
        }
        
        media = (soma / freqTot)
        m = media.toFixed(2) // arredondando media

        // MEDIANA
        meio = (freqTot / 2).toFixed(1)

        for(let i = 0; i < facArray.length; i++){
            if(meio > facArray[i] && meio < facArray[i + 1]){
                mediana = novoDados[i + 1]
            }
        }

        


        console.log('média:' + m)
        console.log('moda:' + moda)
        console.log('moda Vetor:' + modaArray)
        console.log('mediana:' + mediana)

       

    }
    
   
   
       
//-------------------------------------------------------------------------------------------------------------------------------------------------------

    // FREQUENCIA NOMINAL E ORDINAL
    
    if(variavel.value === 'nominal' || variavel.value === 'ordinal'){

        let maior = 0
        var moda = 0
        let meio = 0
        var mediana = 0
        var modaArray = []
        let freqSort = []
        var media = 'Não existe'
        
        //MODA
        for(let i = 0; i < freqArray.length; i++){
            freqSort.push(freqArray[i])
        }

        freqSort.sort()
        

        let posIni = freqArray[0]

        for(let i = 1; i < freqArray.length - 1; i++){
            if(posIni !== freqArray[i]){
                moda = 'moda'
                i = (freqArray.length - 1)

            } else {
                moda = 'Amodal'
                modaArray.push(moda)
            }
        }

        if(moda === 'moda'){
            var valor = modaArray.length
            for(let i = 0; i < valor;i++){
                if(modaArray[i] === 'Amodal'){
                    modaArray.splice(0,valor)
                }
            }


            let posFim = (freqSort.length - 1)
            
            maior = freqSort[posFim]

            for(let i = 0; i < freqArray.length; i++){
                if(freqArray[i] === maior){
                    modaArray.push(novoDados[i])
                }
            }
        }

       // MEDIANA
        meio = (freqTot / 2).toFixed(1)

        for(let i = 0; i < facArray.length; i++){
            if(meio > facArray[i] && meio <= facArray[i + 1]){
                mediana = novoDados[i + 1]
            }
        }

        
        console.log('Vetor moda:' + modaArray)
        console.log('moda:' + moda)
        console.log('mediana:' + mediana)
    }



//-------------------------------------------------------------------------------------------------------------------------------------------------------

    // FREQUENCIA CONTINUA

    if(variavel.value === 'continua'){

        let soma = 0
        let maior = 0
        let moda = 0
        var modaArray = []
        var m = 0
        var media = 0
        var xi = []
        let meio = 0
        var mediana = 0
        let freqSort = []



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

    

        for(let i = 0; i < p.length - 1;i++){
            xi.push((p[i] + p[i+1]) / 2)
        }

        for(let i = 0; i < freq.length; i++){
            freqSort.push(freq[i])
        }

        quickSort(freqSort)


        // MODA
        let posIni = freq[0]

        for(let i = 1; i < freq.length - 1; i++){

            var valor = modaArray.length
            for(let i = 0; i < valor;i++){
                if(modaArray[i] === 'Amodal'){
                    modaArray.splice(0,valor)
                }
            }



            if(posIni !== freq[i]){
                moda = 'moda'
                i = (freq.length - 1)

            } else {
                moda = 'Amodal'
                modaArray.push(moda)
            }
        }

        if(moda === 'moda'){
            let posFim = (freqSort.length - 1)
            
            maior = freqSort[posFim]
            // console.log('FreqSort: ' + freqSort)
            // console.log('XI: ' + xi)
            // console.log('maior: ' + maior)

            for(let i = 0; i < freq.length; i++){
                if(freq[i] === maior){
                    modaArray.push(xi[i])
                }
            }
        }
        

        for(let i = 0; i < freq.length; i++){
            soma += freq[i] * xi[i]
        }

        //console.log(freqTot)
        
        media = (soma / freqTot)
        m = media.toFixed(2) // arredondando media

        meio = Math.floor(freqTot / 2)



        console.log('p :' + p)
        console.log('freqTot: ' + freqTot)
        console.log('facCont: ' + facCont)
        console.log('freq: ' + freq)
        console.log('intervalo : ' + intervalo)



        
        for(let i = 0; i < facCont.length; i++){
            if(meio > facCont[i] && meio < facCont[i + 1]){
                mediana = (p[i + 1] + ((((freqTot / 2) - facCont[i]) / freq[i + 1]) * intervalo)).toFixed(2)
            }
        }

        

        console.log('média:' + m)
        console.log('moda:' + moda)
        console.log('moda Vetor:' + modaArray)
        console.log('mediana: ' + mediana)
 
    }
        

//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // MEDIDAS SEPARATRIZES NOMINAL / ORDINAL / DISCRETA / CONTINUA
    if(variavel.value === 'nominal' || variavel.value === 'ordinal' || variavel.value === 'discreta' || variavel.value === 'continua'){

        var posicao = 0
        var resultado = 0
        var facContMed = []

        if(medidas.value === 'quartil'){
           
            for(let i = 1; i <= 4; i++){
                if(valores.value == i){
                    posicao = freqTot * ((i*25)/100)
                }
            }

            

        } 
        
        else if (medidas.value === 'quintil'){

            for(let i = 1; i <= 5; i++){
                if(valores.value == i){
                    posicao = freqTot * ((i*20)/100)
                }
            }
                
            
            console.log(posicao)

        } 
        
        else if (medidas.value === 'decil'){
            for(let i = 1; i <= 10; i++){
                if(valores.value == i){
                    posicao = freqTot * ((i*10)/100)
                }
            }
            console.log(posicao)
        }
        
        else{
            for(let i = 1; i <= 100; i++){
                if(valores.value == i){
                    posicao = freqTot * (i/100)
                }
            }
            console.log(posicao)
        }


        for(let i = 0; i < facArray.length; i++){

            if(posicao === 0){
                resultado = 'Valor não informado'
            }

            else if(posicao <= facArray[0]){
                resultado = novoDados[0]
            }

            else if(posicao > facArray[i] && posicao <= facArray[i + 1]){

                resultado = novoDados[i + 1]
            }
        }

       
        console.log('posicao : '+ posicao)
        console.log('resultado : ' + resultado)
        
    }

    if(variavel.value === 'continua'){
        // console.log('---------------------------------------------------')
        // console.log('posicao : '+ posicao)
        
        
    
        // if(posicao < facCont[0]){
        //     facCont.unshift(0)
        // }

        if(posicao === 0){
            resultado = 'Valor não informado'
        }

        else {
            for(let i = 0; i < facCont.length; i++){
                if(posicao < facCont[0]){
                    facCont.unshift(0)
                    resultado = (p[i] + (((posicao - facCont[i]) / freq[i]) * intervalo)).toFixed(2)
                    facCont.shift(0)
                    i = facCont.length
                }
    
                else if(posicao > facCont[i] && posicao <= facCont[i + 1]){
                    resultado = (p[i + 1] + (((posicao - facCont[i]) / freq[i + 1]) * intervalo)).toFixed(2)
                }
            }
    
        }


       
        // // console.log('posicao : '+ posicao)
        // // console.log('facCont : '+ facCont)
        // console.log('resultado : ' + resultado)
    }




//-------------------------------------------------------------------------------------------------------------------------------------------------------
    // DESCIO PADRÃO E VARIANCIA DISCRETA / CONTINUA

    var radio = document.getElementsByName('opcao')

    if(variavel.value === 'discreta'){

        let pot = novoDados.map(f => Math.pow((f - m),2).toFixed(2))

        let mult = []
        for(let i = 0; i <= pot.length - 1; i ++){
            mult.push((freqArray[i] * pot[i]).toFixed(2))
        }

        let multNumber = mult.map(m => Number(m))
       
        let soma = multNumber.reduce((acum, b) => acum += b)
        
        console.log('pot: ' + pot)
        console.log('mult: ' + multNumber)
        console.log('soma: ' + soma)


        // radios[i].checked = true
        if(radio[0].checked){
            var dp = 0
            dp = Math.sqrt(soma / freqTot).toFixed(2)
            console.log(dp)
        }

        if(radio[1].checked){
            var dp = 0
            dp = Math.sqrt(soma / (freqTot - 1)).toFixed(2)
            console.log(dp)
        }

        var cv = 0

        cv = ((dp / m) * 100).toFixed(2)
        console.log(cv)

    }

    else if(variavel.value === 'continua'){

        console.log('xi : ' + xi)

        let pot = xi.map(f => Math.pow((f - m),2).toFixed(2))

        let mult = []
        for(let i = 0; i <= pot.length - 1; i ++){
            mult.push((freq[i] * pot[i]).toFixed(2))
        }

        let multNumber = mult.map(m => Number(m))
       
        let soma = multNumber.reduce((acum, b) => acum += b)
        
        console.log('pot: ' + pot)
        console.log('mult: ' + multNumber)
        console.log('soma: ' + soma)

        if(radio[0].checked){
            var dp = 0
            dp = Math.sqrt(soma / freqTot).toFixed(2)
            console.log('dp populacao: '+ dp)
        }

        if(radio[1].checked){
            var dp = 0
            dp = Math.sqrt(soma / (freqTot - 1)).toFixed(2)
            console.log('dp amostra: ' + dp)
        }

        var cv = 0

        cv = ((dp / m) * 100).toFixed(2)
        console.log('cv: ' + cv)


    }






//-------------------------------------------------------------------------------------------------------------------------------------------------------

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

                        '#1d3557',
                        '#457b9d',
                        '#f4a261',
                        '#e9c46a',
                        '#02c39a',
                        '#c44536',
                        '#011627',
                        '#283618',
                        '#540b0e',
                        '#c9ada7',
                        '#e36414',
                        '#ce4257'

                        // '#00d2a6',
                        // '#00fb71',
                        // '#feff67',
                        // '#fe6067',
                        // '#516067',
                        // '#5160ff',
                        // '#f98140',
                        // '#a96fbd',
                        // '#021802',
                        // '#8102f7'
                    ],
                    
                    borderWidth: 2
                
                    }
                ]
                
            },
    
            options:{  
    
                title:{
                    display: true,
                    fontSize: 20,
                    text: ''
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
                    label: "Dados",
                    data: freqArray,
                
                    backgroundColor:[
                        '#1d3557',
                        '#457b9d',
                        '#f4a261',
                        '#e9c46a',
                        '#02c39a',
                        '#c44536',
                        '#011627',
                        '#283618',
                        '#540b0e',
                        '#c9ada7',
                        '#e36414',
                        '#ce4257'


                        // '#00d2a6',
                        // '#00fb71',
                        // '#feff67',
                        // '#fe6067',
                        // '#516067',
                        // '#5160ff',
                        // '#f98140',
                        // '#a96fbd',
                        // '#021802',
                        // '#8102f7'
                    ],
                    
                    borderWidth: 2
                
                    }
                ]
                
            },
    
            options:{  
    
                title:{
                    display: true,
                    fontSize: 15,
                    text: ""
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
    if(variavel.value === 'continua'){
        var z = []
        for(let i = 0; i < p.length - 1; i++){
            z.push(`${p[i]} |--- ${p[i+1]}`)
        }
        let chart = new Chart(document.getElementById("myChart"), {
            type: 'bar',
            data:{
                labels: z,
                datasets: [
                {
                    label: "Dados",
                    data: freq,
                
                    backgroundColor:[
                        '#1d3557',
                        '#457b9d',
                        '#f4a261',
                        '#e9c46a',
                        '#02c39a',
                        '#c44536',
                        '#011627',
                        '#283618',
                        '#540b0e',
                        '#c9ada7',
                        '#e36414',
                        '#ce4257'
                    ],
                    
                    borderWidth: 2
                
                    }
                ]
                
            },
    
            options:{  
    
                title:{
                    display: true,
                    fontSize: 20,
                    text: ""
                },
    
                scales:{
                    xAxes: [{
                        display: false,
                        barPercentage: 1.26,
                      }, {
                        display: true,
                      }],
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
    


    // TABELA TENDENCIA CENTRAL
    if(variavel.value === 'nominal' || variavel.value === 'ordinal' || variavel.value === 'discreta'){
        for(let j = 0; j < novoDados.length; j++){
            let linhaBody = criaTag("tr")
            //linhaBody.appendChild(criaCelula("td" ))
            let cell = criaCelula("td", novoDados[j])
            let cell2 = criaCelula("td", freqArray[j])
            let cell3 = criaCelula("td", `${perArray[j]}%`)
            let cell4 = criaCelula("td", facArray[j])
            let cell5 = criaCelula("td", `${perFac[j]}%`)
            linhaBody.appendChild(cell)
            linhaBody.appendChild(cell2)
            linhaBody.appendChild(cell3)
            linhaBody.appendChild(cell4)
            linhaBody.appendChild(cell5)
            tbody.appendChild(linhaBody)
    
        }

        let linhaBody = criaTag("tr")
        let cell = criaCelula("td", media)
        let cell2 = criaCelula("td", modaArray)
        let cell3 = criaCelula("td", mediana)
        linhaBody.appendChild(cell)
        linhaBody.appendChild(cell2)
        linhaBody.appendChild(cell3)
        tbody2.appendChild(linhaBody)

        let linhaBody3 = criaTag("tr")
        let cellMed = criaCelula("td", resultado)
        linhaBody3.appendChild(cellMed)
        tbody3.appendChild(linhaBody3)

        if(variavel.value === 'discreta'){
            thead4.appendChild(linhaHead4)
            let linhaBody4 = criaTag("tr")
            let cellDp = criaCelula("td", dp)
            let cellCv = criaCelula("td", cv)
            linhaBody4.appendChild(cellDp)
            linhaBody4.appendChild(cellCv)
            tbody4.appendChild(linhaBody4)
        }
        


    }


    // TABELA TENDENCIA CENTRAL
    if(variavel.value === 'continua'){
        for(let j = 0; j < linha; j++){
            let linhaBody = criaTag("tr")
            //linhaBody.appendChild(criaCelula("td" ))
            let cell = criaCelula("td", `${p[j]} |--- ${p[j+1]}`)
            let cell2 = criaCelula("td", freq[j])
            let cell3 = criaCelula("td", `${perArray[j]}%`)
            let cell4 = criaCelula("td", facCont[j])
            let cell5 = criaCelula("td", `${perFac[j]}%`)
            linhaBody.appendChild(cell)
            linhaBody.appendChild(cell2)
            linhaBody.appendChild(cell3)
            linhaBody.appendChild(cell4)
            linhaBody.appendChild(cell5)
            tbody.appendChild(linhaBody)
        }

        let linhaBody = criaTag("tr")
        let cell = criaCelula("td", m)
        let cell2 = criaCelula("td", modaArray)
        let cell3 = criaCelula("td", mediana)
        linhaBody.appendChild(cell)
        linhaBody.appendChild(cell2)
        linhaBody.appendChild(cell3)
        tbody2.appendChild(linhaBody)


        let linhaBody3 = criaTag("tr")
        let cellMed = criaCelula("td", resultado)
        linhaBody3.appendChild(cellMed)
        tbody3.appendChild(linhaBody3)

        thead4.appendChild(linhaHead4)
        let linhaBody4 = criaTag("tr")
        let cellDp = criaCelula("td", dp)
        let cellCv = criaCelula("td", cv)
        linhaBody4.appendChild(cellDp)
        linhaBody4.appendChild(cellCv)
        tbody4.appendChild(linhaBody4)


    }
    


    let linhaFoot = criaTag("tr")
    let celulaFoot = criaCelula("td", "")
    celulaFoot.setAttribute("colspan",5)
    
    linhaFoot.appendChild(celulaFoot)
    tbody.appendChild(linhaFoot)
}
