const fs = require('fs');
const filename = process.argv[1];

function fuelRequirement(mass) {
  return Math.floor(mass / 3) - 2;
}
function totalFuelRequirement() {
  console.log('...:::Calculating Fuel Requirements:::... ');
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data.split("\n").reduce( (acc, mass) => {
      return acc + fuelRequirement(mass);
    }, 0));
  });
}


module.exports = {
  fuelRequirement, totalFuelRequirement
};