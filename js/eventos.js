

const SELECT_REGIAO = document.getElementById('regiao')
const SELECT_ESTADO = document.getElementById('estado')
const SELECT_CIDADE = document.getElementById('cidade')



function atualizarRegioes(){

    let regioes = [
        'norte',
        'nordeste',
        'sul',
        'sudeste',
        'centro oeste'
    ]
regioes = regioes.map(cadaRegiao=>`<option>${cadaRegiao}</option>`)
SELECT_REGIAO.innerHTML += regioes
    // regioes.forEach(cadaRegiao => {
    //     SELECT_REGIAO.innerHTML += `<option>${cadaRegiao}</option>`
    // })
}

function atualizarEstados(){
    let estados = [
        'estado 1',
        'estado 2',
        'estado 3'
    ]
    estados = estados.map(cadaEstado => `<option>${cadaEstado}</option>`)
    SELECT_ESTADO.innerHTML += estados
}

function atualizarCidades(){
    let cidades = [
        'cidade 1',
        'cidade 2',
        'cidade 3'
    ]

    cidades = cidades.map(cadaCidade=> `<option>${cadaCidade}</option>`)
    SELECT_CIDADE.innerHTML += cidades
}

atualizarRegioes()
atualizarEstados()
atualizarCidades()
