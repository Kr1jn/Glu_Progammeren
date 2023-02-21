const container = document.getElementById("container");

for(let x=0; x<2000; x++) {
    const div = document.createElement("div");
    div.className = "vakje";
    container.appendChild(div);
}
