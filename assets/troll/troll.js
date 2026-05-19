import { player } from "./assets/player.js";
document.addEventListener("click", function() {
  document.getElementById("shootSound").play();
  player.reloading = true;
  setTimeout(function() {
    player.reloading = false;
  }, 970);
});
const appendTrolls = setInterval(function() {
  var troll = document.createElement("img");
  troll.src = "./assets/troll/troll.png";
  troll.height = 50;
  troll.width = 50;
  troll.style.position = "fixed";
  troll.style.left = Math.floor(Math.random() * window.innerWidth) - 500 + "px";
  troll.style.bottom = "36px";
  var health = 20;
  var closeness = 50;
  var increaseCloseness = setInterval(function() {
    closeness = closeness + 100;
    troll.width = closeness;
    troll.height = closeness;
    if (closeness === 900) {
      troll.remove();
      player.health = player.health - 100;
      clearInterval(increaseCloseness);
      if (player.health === 0) {
        window.close();
      }
    }
  }, 4500);
  troll.addEventListener("click", function() {
    if (player.reloading === true) {
      console.log("Reloading... please wait.");
    } else {
      health = health - 5;
      if (health === 0) {
        troll.remove();
        clearInterval(increaseCloseness);
      }
    }
  });
  document.body.appendChild(troll);
}, 3900);
