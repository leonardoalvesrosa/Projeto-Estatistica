
function calcular(){

    let n = Number(document.getElementById('dados').value)   // dados
    let p = Number(document.getElementById('sucesso').value).toFixed(1) // sucesso
    let q = Number(document.getElementById('fracasso').value).toFixed(1) // fracasso
    let resultado = document.getElementById('resultado')
    let dadoEvento = (document.getElementById('evento'))   // evento
    let evento = dadoEvento.value
    let vetorEvento = []
    let k = []


    if(n === '' || p === '' || q === '' || evento === ''){
        swal("Ops!", "Digite dados válidos!", "error");
        return
    }


    console.log(n)
    console.log(p)
    console.log(q)
    console.log(evento)
    

    vetorEvento.push(evento)
    let eventoNumber = (vetorEvento.toString().split(';'));

    k = eventoNumber.map(num => Number(num))


    
    console.log(k)
   


    const fatorial = (x) => x === 0 || x === 1 ? 1 : x * fatorial(x - 1)



    let prob = []
    let analiseComb = []

    for(let i = 0; i <= k.length - 1; i++){

        analiseComb[i] = fatorial(n) / (fatorial(n - k[i]) * fatorial(k[i]))

        prob[i] = analiseComb[i] * (p**k[i]) * (q**(n - k[i]))

        console.log('Analise Combinatoria: ' + analiseComb[i])
        console.log('Probabilidade: ' + prob[i])
    }
    
    let somaProb = prob.reduce((acum, n) => acum += n)

    somaProb = (somaProb * 100).toFixed(2)

    console.log('Soma: ' + somaProb)

    let resultadoProb = document.createElement('h3')
    resultadoProb.innerText = `Probabilidade é de ${somaProb} %`

    document.getElementById('resultado').innerHTML = ''
    resultado.appendChild(resultadoProb)


}


