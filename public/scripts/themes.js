let documentStyle = document.documentElement.style;

let defaultStylesheetVariableValues = {
    primaryColor: "#34cb79",
    backgroundColor: "unset",
    titleColor: "unset",
    primaryHoverColor: "#2fb86e",
    mainColor: ""
}

let stylesheetVariableNames = [
    "PrimaryColor",
    "BackgroundColor",
    "TitleColor",
    "PrimaryHoverColor",
    "MainColor"
]
// Get a css variable
let indexThemeConfiguration = [
    {
        ...defaultStylesheetVariableValues,
        primaryColor: "#34cb79",
        backgroundColor: "unset",
        titleColor: "unset",
        primaryHoverColor: "#2fb86e",
        mainColor: ""
    },
    {
        ...defaultStylesheetVariableValues,
        primaryColor: "rgb(0,0,150)",
        backgroundColor: "red",
        titleColor: "unset",
        primaryHoverColor: "rgb(0,0,255)",
        mainColor: "unset"
    }
]

let createPointThemeConfiguration = [
    {
        ...defaultStylesheetVariableValues,
        primaryColor: "#34cb79",
        backgroundColor: "white",
        titleColor: "unset",
        primaryHoverColor: "#2fb86e",
        mainColor: "#f0f0f5"
    },
    {
        ...defaultStylesheetVariableValues,
        primaryColor: "rgb(0,0,150)",
        backgroundColor: "red",
        titleColor: "unset",
        primaryHoverColor: "rgb(0,0,255)",
        mainColor: "#f0f0f5"
    }
]

let themeByDenomination = {
    main: {
        index: indexThemeConfiguration[0],
        createPoint: createPointThemeConfiguration[0]
    },
    red: {
        index: indexThemeConfiguration[1],
        createPoint: createPointThemeConfiguration[1]
    }
}

let themes = [themeByDenomination.main,themeByDenomination.red]

// (variableNames: string[],variableValues: obj) -> void
function setStylesheetVariables(variableNames, variableValues){
    if (variableNames.length !== Object.keys(variableValues).length){
        console.error("The list and object have not the same size; keys:",variableNames.length, ",values:", Object.keys(variableValues).length)
        return;
    }
    valuesList = Object.values(variableValues)
    
    variableNames.forEach((name,index) => {
        const propertyName = name[0].toLowerCase() + name.substr(1);
        console.log(propertyName)
       documentStyle.setProperty( "--" + propertyName,valuesList[index])
    })
}