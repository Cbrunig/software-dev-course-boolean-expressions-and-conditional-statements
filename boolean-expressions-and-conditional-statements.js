const readline = require('readline-sync');

// Player inventory
let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasKey = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains and find a hidden cave.");
    const caveChoice = readline.question("Do you 'enter' the cave or 'continue' past it? ");
    
    if (caveChoice === "enter") {
      console.log("Inside, you find a treasure chest and a sleeping dragon!");
      if (hasSword) {
        const fightChoice = readline.question("Do you try to 'fight' the dragon or 'sneak' past it? ");
        
        if (fightChoice === "fight") {
          console.log("You bravely fight the dragon and, after a tough battle, you slay it! You take the treasure and find a key among the gold.");
          hasKey = true;
        } else {
          console.log("You carefully take the treasure and escape before the dragon wakes up!");
          hasKey = true;
        }
      } else {
        console.log("The dragon wakes up and chases you out of the cave. You barely escape!");
      }
    } else {
      console.log("You continue past the cave and reach an ancient ruin, but the door is locked.");
      if (hasKey) {
        console.log("Using the key from the cave, you unlock the door and find a powerful artifact!");
      } else {
        console.log("You need a key to enter. Maybe there's one hidden somewhere.");
      }
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village" || hasMap) {
  console.log("You arrive at the village and see a blacksmith and a merchant.");
  const villageChoice = readline.question("Do you visit the 'blacksmith' or the 'merchant'? ");
  
  if (villageChoice === "blacksmith") {
    console.log("The blacksmith offers you a sword in exchange for a favor.");
    const favorChoice = readline.question("Do you help the blacksmith by fetching materials from the forest? (yes/no) ");
    
    if (favorChoice === "yes") {
      console.log("You gather the materials, and the blacksmith rewards you with a strong sword.");
      hasSword = true;
    } else {
      console.log("You refuse, and the blacksmith sends you away.");
    }
  } else if (villageChoice === "merchant") {
    console.log("The merchant offers you a map for some gold.");
    const buyMap = readline.question("Do you buy the map? (yes/no) ");
    
    if (buyMap === "yes") {
      console.log("You purchase the map, which reveals hidden locations!");
      hasMap = true;
    } else {
      console.log("You decline the offer and leave the merchant's stall.");
    }
  }
} else {
  console.log("You get lost and wander aimlessly.");
}
