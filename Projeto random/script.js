const botao = document.querySelector(".botao")


botao.addEventListener("click",function(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const resultado = Math.floor(Math.random() * [max - min + 1] + min)

    alert("resultado" +resultado)

})