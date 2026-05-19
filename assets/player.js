const player = {
  "health" : 1000,
  "reloading" : false
};
const aim = document.createElement("img");
aim.width = 100;
aim.height = 100;
aim.style.position = "fixed";
aim.style.zIndex = 99999999;
aim.style.pointerEvents = "none";
window.addEventListener("mousemove", function(event) {
  aim.style.left = event.clientX - 50 + "px";
  aim.style.top = event.clientY - 50 + "px";
});
document.body.appendChild(aim)
