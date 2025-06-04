function fellAsleep() {
  return Math.random() < 0.2;
}

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name + " mowed the yard");
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    if (fellAsleep()) {
      return reject(name + " got tired and fell asleep");
    }
    setTimeout(() => {
      console.log(name + " finsihed using the weed eater.");
      resolve();
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    if (fellAsleep()) {
      return reject(name + " got tired and fell asleep");
    }
    setTimeout(() => {
      console.log(name + " finished trimming the hedges.");
      resolve();
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    if (fellAsleep()) {
      return reject(name + " got tired and fell asleep");
    }
    setTimeout(() => {
      console.log(name + " finished collecting the wood.");
      resolve();
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    if (fellAsleep()) {
      return reject(name + " got tired and fell asleep");
    }
    setTimeout(() => {
      console.log(name + " finished watering the garden.");
      resolve();
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(() => weedEat(name))
    .then(() => trimHedges(name))
    .then(() => collectWood(name))
    .then(() => waterGarden(name))
    .then(() => {
      console.log(name + " finished all their chores!");
    })
    .catch((error) => {
      console.log(error);
    });
}
