let treasure = {
  x: 100,
  y: 200,
};

let map = document.getElementById("map");
let wrap = document.getElementById("wrap");

let coords = document.getElementById("coords");

console.log(map.width);
wrap.style.width = `${map.width}px`;
wrap.style.height = "570px";

map.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  coords.value = `Coords: ${x} : ${y}`;
};
