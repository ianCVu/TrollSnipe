import { player } from "../player.js";
const appendTrolls = setInterval(function() {
  var troll = document.createElement("img");
  troll.height = 500;
  troll.width = 500;
  troll.style.position = "fixed";
  troll.style.left = Math.floor(Math.random() * window.innerWidth - 500) + "px";
  troll.style.bottom = "36px";
  var health = 20;
  var closeness = 500;
  var increaseCloseness = setInterval(function() {
    closeness = closeness + 100;
    troll.width = closeness;
    troll.height = closeness;
    if (closeness === 1500) {
      troll.remove();
      player.health = player.health - 100;
      clearInterval(increaseCloseness);
      if (player.health === 0) {
        window.close();
      }
    }
  }, 760);
  troll.addEventListener("click", function() {
    if (player.reloading === true) {
      console.log("Reloading... please wait.");
    } else {
      health = health - 20;
      if (health === 0) {
        troll.remove();
        clearInterval(increaseCloseness);
      }
    }
  });
  document.body.appendChild(troll);
}, 10000);
