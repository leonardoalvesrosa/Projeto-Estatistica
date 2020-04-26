document.querySelector("#add-data").addEventListener("click", function() {
  let typeOfData = document.getElementById("type");
  let varName = document.getElementById("var-name").value;
  let input = document.getElementById("dataInput").value;

  if (typeOfData.value === "quantitativa") { //selecionador de quantitativa ou qualitativa
    quantitativeFunc(varName, input);
  } else {
    qualitativeFunc(varName, input);
  }
});
let newArray;

//testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2

function quantitativeFunc(name, array) {  //falta adicionar o nome, mas isso é o de menos
  newArray = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float

  let sortArray = newArray.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente
  let freqArray = [], facArray = [] 
  let x, fac = 0
  for (let i = 0; i < sortArray.length; i = x) {  //função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
    let freqCont = 1;

    for (x = i + 1; x < sortArray.length; x++) {
      if (sortArray[i] == sortArray[x]) {
        freqCont++;
      } else {
        break;
      }
    }
    fac += freqCont // acumulador para frequencia acumulada
    facArray.push(fac) // push no array de frequencia acumulada
    freqArray.push(freqCont); // push no array de frequencia normal
    
    // console.log(`Elemento = ${sortArray[i]}; frequencia = ${freqCont}`);
  }

  let filteredArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i); // função que filtra o vetor para tirar todos números repetidos
  /*console.log(sortArray);
  console.log(freqArray);*/

 //let freqTotal = accumulate(freqArray)



writeTable(filteredArray, freqArray,facArray, sortArray) // chamada da função de escrever tabela

  }

  let freqIpercentArray = [], acmFreq = 0


  function accumulate(vet){
    for( i of vet){
      if(i > 0){
        vet[i] += vet[i -1]
      }
    }
    return vet
  }

//  writeTable(sortArray, freqArray);
  

// teste para git

function writeTable(element, freq , fac, array) { //função para escrever na tabela


  function freqIpercent(repetition , array){ // função de frequencia normal porcento
    let aux = repetition / array.length
    let percentual = aux * 100
    freqIpercentArray.push(percentual.toFixed(0))
    freqIpercentArray = freqIpercentArray.map(x => parseFloat(x)) // conversão para number
   // return percentualFixed

  }  

 



  for (let i = 0; i < element.length; i++) { //escreve a tabela
    let linha = document.createElement("tr");
    document.getElementById("col").appendChild(linha)
    let coluna1 = document.createElement("td");
    let coluna2 = document.createElement("td")
    let coluna3 = document.createElement("td")
    let coluna4 = document.createElement("td")
    let coluna5 = document.createElement("td")

    

    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    linha.appendChild(coluna4);
    linha.appendChild(coluna5);

    freqIpercent(freq[i], array)

    console.log(freqIpercentArray)
 
     acmFreq += Math.floor(freqIpercentArray[i]) // frequencia acumulada porcento
     


    coluna1.innerText = element[i]
    coluna2.innerText = freq[i]
    coluna3.innerText = freqIpercentArray[i]
    coluna4.innerText = fac[i]
    coluna5.innerText = acmFreq
    
    //let coluna2 = document.getElementsByClassName('coluna2')
    //coluna1.innerT = element


  }

  

 /* celula.innerText = element;
  celula2.innerText = freq;*/

  /* document.getElementById('col').innerText=''
        let col1
        document.querySelector('#headVar').innerHTML = name  
        for (element of elements){ 
        col1 = document.createElement("tr")
        //col2 = document.createElement("tr")
        col1.innerText = element
       // col2.innerText = freq
        document.getElementById('col').appendChild(col1)
        //document.getElementById('col').appendChild(col2) }*/
}
