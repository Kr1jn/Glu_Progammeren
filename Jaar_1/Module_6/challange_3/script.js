//this defines the amount of points you get per click
var cookietxt = document.getElementById("cookietxt");
var upgradebutton = document.getElementById("upgradebutton");
var upgradecounter = document.getElementById("upgradecounter");
var resetbutton = document.getElementById("reset");

var cookieAmount = 0;
var clicks = 1;
var upgradePrice = 50;
var upgradeCount = 0;
//this is the same but then adds the amount of cookies you get per click to what you already have
function addcookie() {
  cookieAmount += clicks;
  cookietxt.innerHTML = cookieAmount + " Koekjes";
}

//This sets the amount you need for the upgrade
function upgradeClicks() {
  //this is when you click on the button the 50 points go away and you get a extra point per click
  if (cookieAmount >= upgradePrice) {
    cookieAmount -= upgradePrice;
    cookietxt.innerHTML = cookieAmount + " Koekjes";
    clicks += clicks;
    upgradeCount += 1;
    upgradePrice += upgradePrice;
    upgradebutton.innerHTML = "Upgraden kost " + upgradePrice + " koekjes";
    upgradecounter.innerHTML = upgradeCount;
  }
}
