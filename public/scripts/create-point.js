function  populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) =>{return res.json()})
    .then(states =>{
        for(state of states){
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome} </option>`
        }

        
    })
}
populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")

    const stateInpunt = document.querySelector("input[name= state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInpunt.value = event.target.options[indexOfSelectedState].text

    const url= `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value> Selecione a Cidade</option>"
    citySelect.disabled=true
    fetch(url)
    .then((res) =>{return res.json()})
    .then(cities =>{
        
        for(city of cities){
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome} </option>`
        }

        citySelect.disabled=false
        
    })
}

document.
    querySelector("select[name=uf]")
    .addEventListener("change", getCities)
// intes de coleta 

const itemsToCollect = document.querySelectorAll(".items-grid li")
 for(const item of itemsToCollect){
     item.addEventListener("click", handleSelectedItem )

 }
 const collectedItems = document.querySelector("input[name=items]")
 let selectedItems =[]

 function handleSelectedItem(event){
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem items selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })

    // se já estiver selecionado,
    if ( alreadySelected >= 0 ) {
        // tirar  da selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        // se nao estiver selecionado
        // adicionar à selecao
        selectedItems.push(itemId)
    }
    
    collectedItems.value = selectedItems
}