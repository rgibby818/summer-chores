function getName() {
  return process.argv
    .slice(2)[0]
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = { getName };
