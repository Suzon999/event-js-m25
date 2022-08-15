// console.log('clicked');
document.getElementById("delete-btn").addEventListener("click", function () {

})

document.getElementById("delete-confirm").addEventListener('keyup', function (event) {
    let text = event.target.value;
    const deleteButton = document.getElementById("delete-btn");
    if (text == "delete") {
        deleteButton.removeAttribute("disabled");
    }
    else {
        deleteButton.setAttribute("disabled", true);

    }
});