// Write your solution in this file!
const driver = {};


// This function do not mutate the driver and return a new driver
// that has an updated value for the key passed in

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {
    [key]: value
  })

}
const newDriver =
  updateDriverWithKeyAndValue(driver, key, value);



// mutate the driver parameter passed in and returns the updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;

}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}
