const convertButton = document.querySelector(".convert-button")
const opcao2 = document.querySelector(".select-2")
const opcao1 = document.querySelector(".select-1")

convertButton.addEventListener("click",function(){
    const inputCurrecyValues = document.querySelector(".input-currency").value

    const conversoreal = document.querySelector(".convert-dolar")//conversão do real

    const conversordolar = document.querySelector(".convert-real")//conversor do outras moedas

    console.log(opcao1.value)

    if(opcao1.value == "real1"){  //Se o select estiver selecionado no valor de dólar
        conversordolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
        }).format(inputCurrecyValues)
    
    }

    if(opcao1.value == "dolar1"){  //Se o select estiver selecionado no valor de dólar
        conversordolar.innerHTML = new Intl.NumberFormat("en-us",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrecyValues)
    
    }
    if(opcao1.value == "euro1"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrecyValues)
    }
    if(opcao1.value == "bitcoin1"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"XBT"
        }).format(inputCurrecyValues)
    }
    if(opcao1.value == "libra1"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrecyValues)
    }
})



//função de conversão da parte de baixo
convertButton.addEventListener("click",function(){
    const inputCurrecyValues = document.querySelector(".input-currency").value

    const conversoreal = document.querySelector(".convert-real")//conversão do real

    const conversordolar = document.querySelector(".convert-dolar")//conversor do outras moedas

    console.log(opcao2.value)

    const realToday = 5.0
    const dolarToday = 5.2
    const euroToday = 6.2    
    const bitcoinToday = 4.0
    const libraToday = 3.0

    if(opcao2.value == "real"){  //Se o select estiver selecionado no valor de dólar
        conversordolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
        }).format(inputCurrecyValues / realToday)
    
    }

    if(opcao2.value == "dolar"){  //Se o select estiver selecionado no valor de dólar
        conversordolar.innerHTML = new Intl.NumberFormat("en-us",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrecyValues / dolarToday)
    
    }
    if(opcao2.value == "euro"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrecyValues / euroToday)
    }
    if(opcao2.value == "bitcoin"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"XBT"
        }).format(inputCurrecyValues / bitcoinToday)
    }
    if(opcao2.value == "libra"){ // Se o valor do select estiver selecionado o valor do EURO
        conversordolar.innerHTML =  new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrecyValues / libraToday)
    }
})




// TROCA DE MOEDA E NOMES DA PARTE DE CIMA

opcao1.addEventListener("change",function(){
    console.log("trocou de moeda")

    const trocamoeda = document.querySelector(".real-troca")
    const trocaimagem = document.querySelector(".br")

    if (opcao1.value == "real1"){
        trocamoeda.innerHTML = "Real"
        trocaimagem.src = "./assents/br.png"  
    }
    if (opcao1.value == "dolar1"){
        trocamoeda.innerHTML = "Dólar americano"
        trocaimagem.src = "./assents/usa.png"  
    }
    if (opcao1.value == "euro1"){
        trocamoeda.innerHTML = "Euro"
        trocaimagem.src = "./assents/euro.png"  
    }
    if (opcao1.value == "bitcoin1"){
        trocamoeda.innerHTML = "Bitcoin"
        trocaimagem.src = "./assents/bitcoin.png"  
    }
    if (opcao1.value == "libra1"){
        trocamoeda.innerHTML = "Libra"
        trocaimagem.src = "./assents/libra.png"  
    }   
})



// TROCA DE MOEDA E NOMES DA PARTE DE BAIXO

opcao2.addEventListener("change",function(){
    console.log("trocou de moeda")

    const trocamoeda = document.querySelector(".dolar-troca")
    const trocaimagem = document.querySelector(".usa")

    if (opcao2.value == "real"){
        trocamoeda.innerHTML = "Real"
        trocaimagem.src = "./assents/br.png"  
    }

    if (opcao2.value == "dolar"){
        trocamoeda.innerHTML = "Dólar americano"
        trocaimagem.src = "./assents/usa.png"  
    }
    if (opcao2.value == "euro"){
        trocamoeda.innerHTML = "Euro"
        trocaimagem.src = "./assents/euro.png"  
    }
    if (opcao2.value == "bitcoin"){
        trocamoeda.innerHTML = "Bitcoin"
        trocaimagem.src = "./assents/bitcoin.png"  
    }
    if (opcao2.value == "libra"){
        trocamoeda.innerHTML = "Libra"
        trocaimagem.src = "./assents/libra.png"  
    }   
})




