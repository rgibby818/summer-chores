const { getName } = require("./getName");
const userName = getName();

doSummerChores(userName);

function fellAsleep() {
  return Math.random() < 0.2;
}

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(name + " mowed the yard");
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  if (fellAsleep()) {
    console.log(name + " got tired and fell asleep");
    return;
  }

  setTimeout(() => {
    console.log(name + " finsihed using the weed eater.");
    callback();
  }, 1500);
}

function trimHedges(name, callback) {
  if (fellAsleep()) {
    console.log(name + " got tired and fell asleep");
    return;
  }

  setTimeout(() => {
    console.log(name + " finished trimming the hedges.");
    callback();
  }, 1000);
}

function collectWood(name, callback) {
  if (fellAsleep()) {
    console.log(name + " got tired and fell asleep");
    return;
  }

  setTimeout(() => {
    console.log(name + " finished collecting the wood.");
    callback();
  }, 2500);
}

function waterGarden(name, callback) {
  if (fellAsleep()) {
    console.log(name + " got tired and fell asleep");
    return;
  }

  setTimeout(() => {
    console.log(name + " finished watering the garden.");
    callback();
  }, 500);
}

function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(name + "finished all their chores!");
          });
        });
      });
    });
  });
}
