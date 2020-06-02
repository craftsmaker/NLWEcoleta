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
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            citySelect.innerHTML += cities.map((city) => {
                return citySelect.innerHTML = `<option value="${city.id}">${city.nome}</option>`
            })
            citySelect.disabled = false;
        })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities);