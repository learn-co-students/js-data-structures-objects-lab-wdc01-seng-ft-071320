// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue( driver, key, value) {
    let newObj = {...driver};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue ( driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let clone = { ... driver };
    delete clone[key];
    return clone
}

function destructivelyDeleteFromDriverByKey(driver, key ) {
    delete driver[key];
    return driver;
}