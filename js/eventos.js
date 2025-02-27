

const SELECT_REGIAO = document.getElementById('regiao')
const SELECT_ESTADO = document.getElementById('estado')
const SELECT_CIDADE = document.getElementById('cidade')



function atualizarRegioes(){

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
         .then(res => res.json())
         .then(regioes =>{
            regioes = regioes.map(cadaRegiao=>`<option value=${cadaRegiao.id}>${cadaRegiao.nome}</option>`)
SELECT_REGIAO.innerHTML += regioes

         })

    

    // regioes.forEach(cadaRegiao => {
    //     SELECT_REGIAO.innerHTML += `<option>${cadaRegiao}</option>`
    // })
}

function atualizarEstados(){
    let id = SELECT_REGIAO.value
 fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados
`)
.then(res => res.json())
.then(estados =>{
    estados = estados.map(cadaEstado => `<option value = ${cadaEstado.id}>${cadaEstado.nome}</option>`)
    SELECT_ESTADO.innerHTML += estados
})
    
}

function atualizarCidades(){
    let id = SELECT_ESTADO.value
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios
`)
.then(res => res.json())
.then(cidades =>{
    cidades = cidades.map(cadaCidade=> `<option>${cadaCidade.nome}</option>`)
    SELECT_CIDADE.innerHTML += cidades

})

   
}

atualizarRegioes()

