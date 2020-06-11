let primaryColor = localStorage.getItem("createPointPrimaryColor");
let backgroundColor = localStorage.getItem("createPointBackgroundColor");
let titleColor = localStorage.getItem("createPointTitleColor");
let primaryHoverColor = localStorage.getItem("createPointPrimaryHoverColor");
let mainColor = localStorage.getItem("createPointMainColor");

setStylesheetVariables(stylesheetVariableNames,{
    ...defaultStylesheetVariableValues,
    primaryColor,
    backgroundColor,
    titleColor,
    primaryHoverColor,
    mainColor
})