let primaryColor = localStorage.getItem("indexPrimaryColor");
let backgroundColor = localStorage.getItem("indexBackgroundColor");
let titleColor = localStorage.getItem("indexTitleColor");
let primaryHoverColor = localStorage.getItem("indexPrimaryHoverColor");
let mainColor = localStorage.getItem("indexMainColor");

setStylesheetVariables(stylesheetVariableNames,{
    ...defaultStylesheetVariableValues,
    primaryColor,
    backgroundColor,
    titleColor,
    primaryHoverColor,
    mainColor
})