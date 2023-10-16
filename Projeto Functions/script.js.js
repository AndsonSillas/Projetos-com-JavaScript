const result = document.querySelector(".result")
const humano = document.querySelector(".human")
const maquina = document.querySelector(".machine")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (HumanChoice) => {
    playTheGame(HumanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + "Máquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Empate"
    }
    else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        result.innerHTML = "Você ganhou"
        humanScoreNumber++ 
        humano.innerHTML = humanScoreNumber
    }
    else {
        machineScoreNumber++
        maquina.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para Alexa!"

    }
}