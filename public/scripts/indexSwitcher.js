let primaryColor = localStorage.getItem("indexPrimaryColor");
let backgroundColor = localStorage.getItem("indexBackgroundColor");
let titleColor = localStorage.getItem("indexTitleColor");
let primaryHoverColor = localStorage.getItem("indexPrimaryHoverColor");

document.documentElement.style.setProperty("--primary-color", primaryColor);    
document.documentElement.style.setProperty("--background-color", backgroundColor);
document.documentElement.style.setProperty("--title-color", titleColor);
document.documentElement.style.setProperty("--primary-color-hovered", primaryHoverColor);


