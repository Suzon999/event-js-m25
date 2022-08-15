
// button event handelar option -1
function makeaRed() {
    document.body.style.backgroundColor = 'red';
}
// button event handelar option -2
document.getElementById("make-pink").addEventListener("click", function (e) {
    document.body.style.backgroundColor = 'pink';
})
// handle onclick function  
function handleClick() {
    const handleText = document.getElementById("change-text");
    handleText.innerText = 'text changed by onclick function '

}

const handleText = document.getElementById("event-handle").addEventListener("click", function () {
    const inputText = document.getElementById("input");
    const text = inputText.value;
    const p = document.getElementById("change-text2");
    p.innerText = text;
    inputText.value = "";
})