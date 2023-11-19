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
wrap.style.position = "relative";

map.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  coords.value = `Coords: ${x} : ${y}`;
  if (Math.abs(event.offsetX - treasure.x) < 60) {
    // умова, де знаходиться скарб - відстань від координат курсору до координат скарбу менше 30
    //alert("Скарб тут!");
    let treasureCircle = document.createElement("div");
    treasureCircle.style =
      "border: solid red; width: 120px; height: 120px; position: absolute; top:0; left:0;";
    wrap.appendChild(treasureCircle);
    alert("Скарб тут!");
  }
};
