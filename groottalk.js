var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("server is not responding", error);
    alert("your server is not responding rightnoe! please try after some time")
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(response => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);
