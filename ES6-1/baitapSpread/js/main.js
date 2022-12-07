let text = document.getElementsByClassName("heading")[0].innerHTML;
let kytu = [...text];

let content = "";
kytu.forEach(element => {
    content += `<span>${element}</span>`
});
document.getElementsByClassName("heading")[0].innerHTML = content;