const container = document.getElementById("container");
//de variablen
let id = 0;
//de for loop die alle squares genereed en de squares een identiek ID geeft
for (let x = 0; x < 2000; x++) {
  id++;
  const div = document.createElement("div");
  div.className = "square";
  div.id = "square_" + id;
  container.appendChild(div);
}
