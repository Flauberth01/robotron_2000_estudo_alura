const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (elemento) => {
        console.log(elemento.target)
    })
})

somar.addEventListener("click", () => {manipulaDados("somar")})

subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}

// const blindagemSom =  document.querySelector('#blindagem-soma')
// const blindagemSub =  document.querySelector('#blindagem-sub')
// const blindagemValue =  document.querySelector('#blindagem-value')

// blindagemSom.addEventListener("click", somaClick)
// blindagemSub.addEventListener("click",  subClick)

// let valor = 0

// function somaClick() {
//     valor += 1
//     console.log(valor);
//     blindagemValue.value = valor

// }

// function subClick() {
//     if (valor > 0 ) {
//         valor -= 1
//         blindagemValue.value = valor
//     }

// }