let matrix = [
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0],
];
const container = document.getElementById("container");
//de variablen
let id = 0;
let row = 0;
let colum = 0;
//de for loop die alle squares genereed en de squares een identiek ID geeft
// for (let x = 0; x < 2000; x++) {
//   id++;
//   const div = document.createElement("div");
//   div.className = "squareijbae"+ matrix[row][colum];
//   div.id = "square_" + id;
//   container.appendChild(div);
//   colum++;
//   if (colum > 10) {
//     colum = 0;
//     row++;
//   };
// }

for (let y = 0; y < matrix.length; y++) {
  for (let x = 0; x < matrix[y].length; x++) {
    console.log("matrix " + matrix[y][x]);
    const div = document.createElement("div");
    div.className = "squareijbae" + matrix[y][x];
    div.id = "square_" + id;
    container.appendChild(div);
  }
}
