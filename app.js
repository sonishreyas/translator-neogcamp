var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text)    {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)    {
    console.log("error occured", error)
    alert("something wrong with server! try again after sometime")
}
function clickEventHandler() {
    // outputDiv.innerText = "translated!!!" +  txtInput.value
    var inputText = txtInput.value; //taking input
    // calling server for processing
    fetch(getTranslationURL(serverURL+"?"+inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)