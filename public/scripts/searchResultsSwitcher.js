let primaryColor = localStorage.getItem("searchResultsPrimaryColor");
let backgroundColor = localStorage.getItem("searchResultsBackgroundColor");
let titleColor = localStorage.getItem("searchResultsTitleColor");
let primaryHoverColor = localStorage.getItem("searchResultsPrimaryHoverColor");
let mainColor = localStorage.getItem("searchResultsMainColor");
let textPrimaryColor = localStorage.getItem("searchResultsTextPrimaryColor");
let textSecundaryColor = localStorage.getItem("searchResultsTextSecundaryColor");
let textTertiaryColor = localStorage.getItem("searchResultsTextTertiaryColor");

setStylesheetVariables(stylesheetVariableNames,{
    ...defaultStylesheetVariableValues,
    primaryColor,
    backgroundColor,
    titleColor,
    primaryHoverColor,
    mainColor
})