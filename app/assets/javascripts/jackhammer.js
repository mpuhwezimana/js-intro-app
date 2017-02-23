var colors = ["orange", "blue", "red", "white", "pink", "gold", "yellow"];
function jackhammer(color){
  color.style["background-color"] = colors[Math.floor(Math.random()*colors.length)];
}