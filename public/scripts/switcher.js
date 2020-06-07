
let documentStyle = document.documentElement.style;


const switcherButton = document.querySelector("#page-home #switcher-button");
const switcherImg = document.querySelector("#page-home #switcher-button img");

// Get a css variable
let indexThemeConfiguration = [
    {
        primaryColor: "#34cb79",
        backgroundColor: "unset",
        titleColor: "unset",
        primaryHoverColor: "#2fb86e",
    },
    {
        primaryColor: "rgb(0,0,255)",
        backgroundColor: "red",
        titleColor: "unset",
        primaryHoverColor: "rgb(0,0,200)",
        mainColor: "unset"
    }
]

let createPointThemeConfiguration = [
    {
        primaryColor: "#34cb79",
        backgroundColor: "white",
        titleColor: "unset",
        primaryHoverColor: "#2fb86e",
        mainColor: "#f0f0f5"
    },
    {
        primaryColor: "rgb(0,0,255)",
        backgroundColor: "red",
        titleColor: "unset",
        primaryHoverColor: "rgb(0,0,200)",
        mainColor: "white"
    }
]

let themes = [
    {
        index: indexThemeConfiguration[0],
        createPoint: createPointThemeConfiguration[0]
    },
    {
        index: indexThemeConfiguration[1],
        createPoint: createPointThemeConfiguration[1]
    },

]

switcherButton.addEventListener("click", e => {

    if (documentStyle.getPropertyValue("--background-color") === "red"){
        switcherImg.setAttribute("src","./assets/icones/lswitcher.svg")

        // index page
        localStorage.setItem("indexPrimaryColor", themes[0].index.primaryColor);
        localStorage.setItem("indexBackgroundColor", themes[0].index.backgroundColor);
        localStorage.setItem("indexTitleColor", themes[0].index.titleColor);
        localStorage.setItem("indexPrimaryHoverColor", themes[0].index.primaryHoverColor)
        localStorage.setItem("indexMainColor", themes[0].index.mainColor)

        //createPoint page
        localStorage.setItem("createPointPrimaryColor", themes[0].createPoint.primaryColor);
        localStorage.setItem("createPointBackgroundColor", themes[0].createPoint.backgroundColor);
        localStorage.setItem("createPointTitleColor", themes[0].createPoint.titleColor);
        localStorage.setItem("createPointPrimaryHoverColor", themes[0].createPoint.primaryHoverColor)
        localStorage.setItem("createPointMainColor", themes[0].createPoint.mainColor)
        
        documentStyle.setProperty("--primary-color",themes[0].index.primaryColor);
        documentStyle.setProperty("--background-color", themes[0].index.backgroundColor);
        documentStyle.setProperty("--title-color",themes[0].index.titleColor);
        documentStyle.setProperty("--primary-color-hovered", themes[0].index.primaryHoverColor);
        documentStyle.setProperty("--main-color", themes[0].index.mainColor);
    }
    else{
        localStorage.setItem("indexPrimaryColor", themes[1].index.primaryColor);
        localStorage.setItem("indexBackgroundColor", themes[1].index.backgroundColor);
        localStorage.setItem("indexTitleColor", themes[1].index.titleColor);
        localStorage.setItem("indexPrimaryHoverColor", themes[1].index.primaryHoverColor);
        localStorage.setItem("indexMainColor", themes[1].index.mainColor);
        
        localStorage.setItem("createPointPrimaryColor", themes[1].createPoint.primaryColor);
        localStorage.setItem("createPointBackgroundColor", themes[1].createPoint.backgroundColor);
        localStorage.setItem("createPointTitleColor", themes[1].createPoint.titleColor);
        localStorage.setItem("createPointPrimaryHoverColor", themes[1].createPoint.primaryHoverColor)
        localStorage.setItem("createPointMainColor", themes[1].createPoint.mainColor);

        documentStyle.setProperty("--primary-color", themes[1].index.primaryColor);
        documentStyle.setProperty("--background-color", themes[1].index.backgroundColor);
        documentStyle.setProperty("--title-color",themes[1].index.titleColor);
        documentStyle.setProperty("--primary-color-hovered", themes[1].index.primaryColor);
        documentStyle.setProperty("--main-color", themes[1].index.mainColor);
    }
})
