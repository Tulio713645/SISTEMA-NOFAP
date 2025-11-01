function patente() {
    const inputdia = document.querySelector("#dia")
    let dia = parseInt(inputdia.value)
    const pResultado = document.querySelector("#resultado")

    if (dia < 1) {
        inputdia.value = 1
        dia = 1
    } else if (dia > 30) {
        inputdia.value = 30
        dia = 30
    }

    let patente2 = ""

    if (dia == 1) {
        patente2 = "Soldado"
    } else if (dia == 2) {
        patente2 = "Cabo"
    } else if (dia >= 3 && dia <= 5) {
        patente2 = "Terceiro Sargento"
    } else if (dia >= 6 && dia <=10) {
        patente2 = "Segundo Sargento"
    } else if (dia >= 11 && dia <= 13) {
        patente2 = "Primeiro Sargento"
    } else if (dia >= 14 && dia <=15) {
        patente2 = "Subtenente"
    } else if (dia >= 16 && dia <= 20) {
        patente2 = "Aspirante Oficial"
    } else if (dia >= 21 && dia <= 23) {
        patente2 = "Segundo Tenente"
    } else if (dia == 24) {
        patente2 = "Primeiro Tenente"
    } else if (dia == 25) {
        patente2 = "Capitão"
    } else if (dia == 26) {
        patente2 = "Major"
    } else if (dia == 27) {
        patente2 = "Coronel"
    } else if (dia == 28) {
        patente2 = "General do Exército"
    } else if (dia == 29) {
        patente2 = "Rei"
    } else if (dia == 30) {
        patente2 = "Monge"
    }

    pResultado.innerHTML = `Patente: ${patente2}`
}