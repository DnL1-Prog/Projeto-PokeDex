const campoTexto = document.getElementById('campoTexto')
const btnConsultar = document.getElementById('btnConsultar')
const display = document.getElementById('display')
const btnLimpar = document.getElementById('btnLimpar')

btnLimpar.addEventListener('click', function () {
    display.innerHTML = ""
    campoTexto.value = ""
    console.clear()
    console.log("Campo de texto e display limpos!")
})

btnConsultar.addEventListener('click', function () {
    console.clear()
    const pokemonInput = campoTexto.value.toLowerCase().trim()

    if (pokemonInput == "") {
        alert("Campo digitado de forma invalida\nDigite o nome ou numero do Pokemon!")
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
        fetch(url)
            .then(function (resposta) {
                if (!resposta.ok) {
                    display.innerHTML = "Pokemon não encontrado!\nTente novamnte!"
                    return
                }
                return resposta.json()
            })


            .then(function (dados) {
                console.log(dados)
                if (dados == undefined) {
                    console.log("Pokémon não encontrado!\nTente novamente")
                }
                else {
                    let foto = dados.sprites.front_default
                    let nome = dados.name
                    let id = dados.id
                    let altura = dados.height
                    let peso = dados.weight
                    let experiencia = dados.base_experience
                    let tipo = dados.types[0].type.name
                    let habilidade = dados.abilities[0].ability.name

                    display.innerHTML = `<img src="${foto}" alt="${nome}">`
                    display.innerHTML += `<br>Nome: ${nome.toUpperCase()}`
                    display.innerHTML += `<br>Número da Pokedex: ${id}`
                    display.innerHTML += `<br>Altura: ${altura}`
                    display.innerHTML += `<br>Peso: ${peso}`
                    display.innerHTML += `<br>Experiência base: ${experiencia}`
                    display.innerHTML += `<br>Tipo: ${tipo.toUpperCase()}`
                    display.innerHTML += `<br>Habilidade: ${habilidade.toUpperCase()}`
                }
            })



    }


})