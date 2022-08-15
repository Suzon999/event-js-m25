document.getElementById("button").addEventListener("click", function () {
    const comeentBox = document.getElementById(" input-text");
    const newCommentBox = comeentBox.value;

    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.innerText = newCommentBox;
    container.appendChild(p);
    comeentBox.value = '';
})