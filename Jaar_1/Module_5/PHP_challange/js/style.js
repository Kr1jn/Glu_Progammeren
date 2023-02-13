const fname = document.getElementById("voornaam")
const aname = document.getElementById("achternaam")
const button = document.getElementById("button")

button.addEventListener("click", () => {
    alert( `${fname.value} ${aname.value}` )
})