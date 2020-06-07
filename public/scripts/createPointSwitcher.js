let primaryColor = localStorage.getItem("createPointPrimaryColor");
let backgroundColor = localStorage.getItem("createPointBackgroundColor");
let titleColor = localStorage.getItem("createPointTitleColor");
let PrimaryHoverColor = localStorage.getItem("createPointPrimaryHoverColor");
let mainColor = localStorage.getItem("createPointMainColor");

document.documentElement.style.setProperty("--primary-color", primaryColor);
document.documentElement.style.setProperty("--background-color", backgroundColor);
document.documentElement.style.setProperty("--title-color", titleColor);
document.documentElement.style.setProperty("--primary-color-hovered", PrimaryHoverColor);
document.documentElement.style.setProperty("--main-color", mainColor);