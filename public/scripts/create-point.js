function populateUFs(){
    const ufSelect = document
        .querySelector("select[name=uf]");
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            ufSelect.innerHTML += states.map((state) => {
                return ufSelect.innerHTML = `<option value="${state.id}">${state.nome}</option>`
            })
        })
        
}
populateUFs();

function getCities(e){
    const {target} = e;
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const indexOfSelectedState = target.selectedIndex;
    stateInput.value = target.options[indexOfSelectedState].text;

    const ufValue = target.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a cidade</option>";
    citySelect.disabled = true;
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            citySelect.innerHTML += cities.map((city) => {
                return citySelect.innerHTML = `<option value="${city.nome}">${city.nome}</option>`
            })
            citySelect.disabled = false;
        })

}


document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities);

const itemsToCollect = document.querySelectorAll(".items-grid li");

itemsToCollect.forEach(item => item.addEventListener("click", handleSelectedItem));

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [];

function handleSelectedItem(e){
    const itemLi = e.target;

    // Add or remove a class in js
    itemLi.classList.toggle("selected");

    const itemID = itemLi.dataset.id;
    
    // Verify selected items

    const alreadySelected  = selectedItems.findIndex(item => item === itemID)

    if (alreadySelected >= 0)
        selectedItems = selectedItems.filter(item => item !== itemID);
    else
        selectedItems.push(itemID);

    collectedItems.value = selectedItems;
    
}