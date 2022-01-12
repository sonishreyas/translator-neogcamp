const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let serverURL = "https://api.funtranslations.com/translate/dothraki.json";

const getTranslationURL = (text) => `${serverURL}?text=${text}`;

const errorHandler = (error) => {
  console.log(`error occured ${error}`);
  alert("something wrong with server! try again after sometime");
};

const clickEventHandler = () => {
  const inputText = txtInput.value; //taking input
  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickEventHandler);
