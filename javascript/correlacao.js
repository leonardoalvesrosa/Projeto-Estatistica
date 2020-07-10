
var a = 0
var b = 0


let projecao = function(){

    console.log('variavel = ' + variavel.value)

    let regressao = document.getElementById('valor').value
    console.log('regressão = ' + regressao)

    let div_projecao = document.getElementById('div_projecao')
    let projecao = document.createElement('h4')
    
    if(variavel.value === 'X'){
        let y = (a * regressao) + b
    
        y = Number(y.toFixed(2))
        console.log('Y = ' + y)
        
        
        projecao.innerText = `Y = ${y}`

        div_projecao.innerHTML = ''
        div_projecao.appendChild(projecao)
        
    }
    
    else if(variavel.value === 'Y'){
 
        //y = (a * regressaoY) + b
    
        let x = (regressao - b) / a
    
        x = Number(x.toFixed(2))
        console.log('X = ' + x)
    
        projecao.innerText = `X = ${x}`

        div_projecao.innerHTML = ''
        div_projecao.appendChild(projecao)
    }
}





function calcular(){

    var dadosVarX = document.getElementById('dadosX').value
    var dadosVarY = document.getElementById('dadosY').value
    let resultado = document.getElementById('resultado')
    var dadosX = []
    var dadosSepX = []
    var dadosY = []
    var dadosSepY = []
    var dadosNumX = []
    var dadosNumY = []
    var somaX = 0
    var somaY = 0
    var multxy = []
    var somaMultxy = 0
    var x2 = []
    var somaX2 = 0
    var y2 = []
    var somaY2 = 0
    var r = 0
    div_projecao.innerHTML = ''

    if (dadosVarX == "" || dadosVarY == ""){
        swal("Ops!", "Digite dados válidos!", "error");
        document.getElementById('dadosX').focus()
        return
    }




    dadosX.push(dadosVarX)
    // console.log('dadosVarX  ' + dadosVarX)

    dadosSepX = dadosX.toString().split(';')
    for(let i = 0; i < dadosSepX.length; i++){
        dadosNumX.push(Number(dadosSepX[i]))
    }

    // console.log('dadosSepX  ' + dadosSepX)

    somaX = dadosNumX.reduce((acum, n) => acum += n)

    dadosY.push(dadosVarY)
    dadosSepY = dadosY.toString().split(';')
    for(let i = 0; i < dadosSepY.length; i++){
        dadosNumY.push(Number(dadosSepY[i]))
    }

    if(dadosNumX.length !== dadosNumY.length){
        swal("Ops!", "Digite dados válidos!", "error");
        variavel.focus()
        return
    }

    somaY = dadosNumY.reduce((acum, n) => acum += n)

    for(i = 0; i < dadosNumX.length; i++){
        multxy.push(dadosNumX[i] * dadosNumY[i])
    }

    somaMultxy = multxy.reduce((acum, n) => acum += n)

    x2 = dadosNumX.map(x => x ** 2)
    somaX2 = x2.reduce((acum, n) => acum += n)

    y2 = dadosNumY.map(y => y ** 2)
    somaY2 = y2.reduce((acum, n) => acum += n)

    var parte1 = ((dadosNumX.length * somaMultxy) - ((somaX) * (somaY)))
    var parte2 =  Math.sqrt(((dadosNumX.length * somaX2)-(somaX ** 2))*((dadosNumX.length * somaY2)-(somaY ** 2)))
    r =  parte1 / parte2 
    r = r * 100
    r = r.toFixed(2)

    
    let resultadoR = document.createElement('h4')
    resultadoR.innerText = `Correlação: ${r} %`



    //---------------Equação---------------------------------------------------------------------------------
    var parte1a = (dadosNumX.length * somaMultxy) - (somaX * somaY)
    var parte2a = (dadosNumX.length * somaX2) - (somaX ** 2)
    a = parte1a / parte2a

    a = Number(a.toFixed(4))


    var parte1b = (somaY / dadosNumY.length)
    var parte2b = (a * (somaX / dadosNumX.length))

    b = parte1b - parte2b

    b = Number(b.toFixed(4))

    // console.log(somaY)
    // console.log(dadosNumY.length)
    // console.log(a)
    // console.log(somaX)
    // console.log(dadosNumX.length)
    // console.log(b)


    let resultadoEqu = document.createElement('h4')
    resultadoEqu.innerText = `Equação: y = ${a} . x + ${b}`
    

//------------------------------------------------------------------------------------------------

    

    var forca = document.createElement('h4')

    if(r === 100){
        forca.innerText = `Perfeita positiva`
    }
    else if(r === -100){
        forca.innerText = `Perfeita positiva`
    }
    else if(r === 0){
        forca.innerText = `Variáveis não relacionadas`
    }
    else if(r > 0 && r < 30){
        forca.innerText = `Fraca`
    }
    else if(r >= 30 && r < 70){
        forca.innerText = `Moderada`
    }
    else{
        forca.innerText = `Forte`
    }

    document.getElementById('resultado').innerHTML = ''
    resultado.appendChild(resultadoR)
    resultado.appendChild(forca)
    resultado.appendChild(resultadoEqu)

    
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

    quickSort(dadosNumX)
    quickSort(dadosNumY)

    dadosNumX = [ ...new Set( dadosNumX ) ];
    dadosNumY = [ ...new Set( dadosNumY ) ];

    // console.log(somaX)
    // console.log(somaY)
    // console.log(multxy)
    // console.log(somaMultxy)
    // console.log(x2)
    // console.log(somaX2)
    // console.log(y2)
    // console.log(somaY2)
    // console.log(parte1)
    // console.log(parte2)
    // console.log('R = '+ r)
    // console.log(dadosNumX)
    // console.log(forca.innerText)








    let select = document.getElementById('select')
    select.className = 'form-group direita'

    let variavel = document.createElement('select')
    variavel.className = 'form-control'
    variavel.id = 'variavel'

    let option_0 = document.createElement('option')
    option_0.value = ''
    option_0.innerHTML = 'Selecione'

    let option_1 = document.createElement('option')
    option_1.value = 'X'
    option_1.innerHTML = 'X'

    let option_2 = document.createElement('option')
    option_2.value = 'Y'
    option_2.innerHTML = 'Y'

    variavel.appendChild(option_0)
    variavel.appendChild(option_1)
    variavel.appendChild(option_2)

    select.innerHTML = ''
    select.appendChild(variavel)



    let div_valor = document.getElementById('div_valor')
    div_valor.className = 'form-group direita'
    
    let valor = document.createElement('input')
    valor.id = 'valor'
    valor.className = 'form-control'
    valor.placeholder = 'Faça uma projeção'

    div_valor.innerHTML = ''
    div_valor.appendChild(valor)


    let div_btn = document.getElementById('div_btn')
    let btn = document.createElement('input')
    btn.type = 'button'
    btn.id = 'btn'
    btn.className = 'btn btn-dark direita'
    btn.value = 'CALCULAR'
    btn.addEventListener("click", projecao)
   

    div_btn.innerHTML = ''
    div_btn.appendChild(btn)
    







    // Limpa Gráfico
    var grafico = document.getElementById('grafico');
    grafico.innerHTML = '&nbsp;';
    $('#grafico').append('<canvas id="myChart"><canvas>');
    ctx = $("#myChart").get(0).getContext("2d");


    for(let i = 0; i < dadosNumX.length; i++){
        // if(dadosNumX[i] === dadosNumY[i]){
        if(forca.innerText === 'Forte'){

            let chart = new Chart(document.getElementById("myChart"), {
                    type: 'line',
                    data:{
                        labels: dadosNumX,
                        datasets: [
                        {
                            label: "X ",
                            data: dadosNumX,
                            // borderColor: '#5EFF4C',
                            borderColor: 'rgb(61, 236, 120)',
                            backgroundColor: 'transparent',
                            borderWidth: 4
                        
                        },
                        {
                            label: "Y ",
                            data: dadosNumY,
                            borderColor: 'rgb(61, 236, 120)',
                            backgroundColor: 'transparent',
                            borderWidth: 4
                
                        }

                        ]
                        
                    },

                    options:{  

                        title:{
                            display: false,
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

        } else{

            let dados = []

            for( let i = 0; i < dadosNumX.length; i++){
                dados.push({
                    x: dadosNumX[i],
                    y: dadosNumY[i],
                    r: 5
                })
            }



            let chart = new Chart(document.getElementById("myChart"), {
                type: 'bubble',
                data:{
                    labels: dados,
                    datasets: [
                    {
                        label: "Regressão",
                        data: dados,
                        borderColor: 'rgb(112, 255, 136)',
                        backgroundColor: 'black',
                        borderWidth: 1
                    
                        },
                    // {
                    //     label: "Y ",
                    //     data: dadosNumY,
                    //     borderColor: '#5EFF4C',
                    //     backgroundColor: 'transparent',
                    //     borderWidth: 4
                
                    // }
        
                    ]
                    
                },
        
                options:{  
        
                    title:{
                        display: false,
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
    }
    



    
}


