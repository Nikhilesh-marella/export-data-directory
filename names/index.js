const names = require("../country/state/city/index");
const fnames = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return fnames(names);
};
console.log(fnames(names));
module.exports = getPeopleInCity;
