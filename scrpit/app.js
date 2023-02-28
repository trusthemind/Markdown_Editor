const txteditor = document.getElementById("txtarea")
const txtresult = document.getElementById("txtresult")
// Creating convector from library
const convector = new showdown.Converter();

txteditor.addEventListener("keyup", (event) => {
    let  temp  = event.target; // Getting html element
    let html = convector.makeHtml(temp.value);
    txtresult.innerHTML = html;

})