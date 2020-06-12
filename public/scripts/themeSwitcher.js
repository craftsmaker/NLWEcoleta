const switcherButton = document.querySelector("#page-home #switcher-button");
const switcherImg = document.querySelector("#page-home #switcher-button img");


// (prefix?:string, listItemKeys: [], values: {}) -> void
function setLocalStorageItems(prefix,keysList,values){
    if (keysList.length !== Object.keys(values).length){
        console.error("The list and object have not the same size; keys:",keysList.length, ",values:", Object.keys(values).length)
        return;
    }
    valuesList = Object.values(values)
    keysList.forEach((key,index) => {
        localStorage.setItem( prefix + key,valuesList[index])
    })
}


switcherButton.addEventListener("click", e => {
    if (documentStyle.getPropertyValue("--backgroundColor") === "red"){

        setLocalStorageItems("index", stylesheetVariableNames, themes[0].index)
        setLocalStorageItems("createPoint", stylesheetVariableNames, themes[0].createPoint)
        setLocalStorageItems("searchResults", stylesheetVariableNames, themes[0].searchResults)
        
        setStylesheetVariables(stylesheetVariableNames,themes[0].index);
    }
    else{
        setLocalStorageItems("index", stylesheetVariableNames, themes[1].index)
        setLocalStorageItems("createPoint", stylesheetVariableNames, themes[1].createPoint)
        setLocalStorageItems("searchResults", stylesheetVariableNames, themes[1].searchResults)

        setStylesheetVariables(stylesheetVariableNames,themes[1].index);
    }
})
