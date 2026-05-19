import { player } from "../player.js";
const appendTrolls = setInterval(function() {
  var troll = document.createElement("img");
  troll.height = "500";
  troll.width = "500";
  var health = 20;
  var closeness = 500;
  var increaseCloseness = setInterval(function() {
    closeness = closeness + 100;
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
    if (health === 0) {
      troll.remove();
      clearInterval(increaseCloseness);
    } else
  });
}, 10000);
