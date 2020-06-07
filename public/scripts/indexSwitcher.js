let primaryColor = localStorage.getItem("indexPrimaryColor");
let backgroundColor = localStorage.getItem("indexBackgroundColor");
let titleColor = localStorage.getItem("indexTitleColor");
let PrimaryHoverColor = localStorage.getItem("indexPrimaryHoverColor");

if (primaryColor)
    document.documentElement.style.setProperty("--primary-color", primaryColor);

if (backgroundColor)
    document.documentElement.style.setProperty("--background-color", backgroundColor);

if (titleColor)
    document.documentElement.style.setProperty("--title-color", titleColor);

if (PrimaryHoverColor)
    document.documentElement.style.setProperty("--primary-color-hovered", PrimaryHoverColor);


